import { useEffect, useState } from "react";
import axios from 'axios'


export const useData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        await axios
            .get('https://jsonplaceholder.typicode.com/todos/')
            .then((result) => {
                setData(result.data)
            }).catch(error => {
                alert(`Ocurrio un error desconocido: ${error}`);
            })
    }
    return [data]

}