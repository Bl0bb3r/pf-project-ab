import React from "react";
import { useHistory } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import NoteIcon from "@material-ui/icons/Note";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import InfoIcon from "@material-ui/icons/Info";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const MenuItems: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const upperItemsList = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "ShoppingList",
      icon: <ShoppingCartIcon />,
      onClick: () => history.push("/shoppinglist"),
    },
    {
      text: "Todos",
      icon: <FormatListBulletedIcon />,
      onClick: () => history.push("/todods"),
    },
    {
      text: "Notes",
      icon: <NoteIcon />,
      onClick: () => history.push("/notes"),
    },
  ];

  const lowerItemsList = [
    // {
    //   text: "eg1",
    //   icon: <DashboardIcon />,
    //   onClick: () => history.push("/"),
    // },
    {
      text: "About",
      icon: <InfoIcon />,
      onClick: () => history.push("/about"),
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      onClick: () => history.push("/settings"),
    },
  ];

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {upperItemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        {lowerItemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default MenuItems;
