import { Grid } from "@material-ui/core";
import { useStyle } from "./assest/Style";
import NavBar from "./components/NavBar";
import Table from "./components/Table";

function App() {
  const classes = useStyle();

  return (
    <div className={classes.containerApp}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
