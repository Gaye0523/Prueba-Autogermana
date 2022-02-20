import React, { useState, useEffect } from "react";
import { useData } from "../../Hooks/useData";
import MUIDataTable from "mui-datatables";

function Table() {
  const [data, setData] = useData();

  const columns = [
    {
      name: "userId",
      label: "Usuario Id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "id",
      label: "Id",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "title",
      label: "Titulo",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <div>
      <MUIDataTable title={"Tabla"} data={data} columns={columns} />
    </div>
  );
}

export default Table;
