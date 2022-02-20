import { AppBar, Toolbar, Box, Typography } from "@material-ui/core";
import { useStyle } from "../../assest/Style";

function NavBar() {
  const classes = useStyle();
  return (
    <AppBar
      position="static"
      color="transparent"
      className={classes.MuiAppBarGradiant}
    >
      <Toolbar variant="dense" className={classes.root}>
        <Box className={classes.containerLogo}>
          <img
            src="https://logos.flamingtext.com/Name-Logos/Gaye-design-china-name.png"
            alt="Logo"
            className={classes.logo}
          ></img>
        </Box>

        <Typography variant="h6">Prueba Front End</Typography>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
