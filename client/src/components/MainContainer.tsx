import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  useTheme,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import MenuItems from "./MenuItems";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainContainer: React.FC = ({ children }) => {
  // Bindings
  const classes = useStyles();
  const theme = useTheme();

  // States
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container =
    window !== undefined ? () => window.document.body : null;

  // handlers
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <article className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" noWrap>
            Andreas Blaabjerg Portfolio Project
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <MenuItems />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <MenuItems />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        Big app
      </main>
    </article>
  );
};

export default MainContainer;
