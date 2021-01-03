import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import schulichlogo from "../schulichlogo.png";
import Box from "@material-ui/core/Box";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import NewReleasesIcon from '@material-ui/icons/NewReleases';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box flexGrow={1}>
            {" "}
            <img
              src={schulichlogo}
              width="115px"
              height="50px"
              alt="Schulich Logo"
            />
          </Box>

          <Box flexGrow={20} justifyContent="center" alignItems="center">
            <Typography variant="h6" className={classes.title}>
              Course Outline App
            </Typography>
          </Box>

          <Box flexGrow={1}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
              <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  <ListItem button key={"Home"} component={Link} to="/">
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                  </ListItem>
                </List>
                <Divider />
                <List>
                  <ListItem button key={"Search"} component={Link} to="/Search">
                    <ListItemIcon>
                      <SearchIcon />
                    </ListItemIcon>
                    <ListItemText>Search</ListItemText>
                  </ListItem>

                  <ListItem
                    button
                    key={"Add New Outline"}
                    component={Link}
                    to="/AddCourse"
                  >
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText>Add New Outline</ListItemText>
                  </ListItem>

                  <ListItem
                    button
                    key={"View Latest Outline"}
                    component={Link}
                    to="/"
                  >
                    <ListItemIcon>
                      <NewReleasesIcon />
                    </ListItemIcon>
                    <ListItemText>View Latest Outline</ListItemText>
                  </ListItem>
                </List>
              </div>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
