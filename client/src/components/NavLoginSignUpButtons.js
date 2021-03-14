import {
  Avatar,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { red } from "@material-ui/core/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsIcon from "@material-ui/icons/Settings";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import { falseLogin, switchLogin } from "../Redux/actions/LoginAction";
import userService from "../services/UserService";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
const NavLoginSignUpButtons = (props) => {
  const [img, setImg] = React.useState("");

  React.useEffect(() => {
    if (userService.getloggedinuser()) {
      userService
        .getImg(userService.getloggedinuser()._id)
        .then((res) => {
          setImg(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: red[500],
    },

    largeButton: {
      padding: 0,
    },
    largeIcon: {
      fontSize: "1.5em",
    },
    largeAvatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const classes = useStyles();
  const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = "primary-search-account-menu";
  // const [anchorElAvatar, setAnchorElAvatar] = React.useState(null);
  const isLoggedInRedux = useSelector((state) => state.login.isloggedin);
  const dispatch = useDispatch();
  // React.useEffect(() => {
  //   console.log(userService.getloggedinuser().email);
  // }, []);

  console.log(isLoggedInRedux);
  const handleClickAvatar = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        {/* <Grid container> */}
        {/* <Grid item xs={2}> */}
        {isLoggedInRedux ? (
          <>
            <Avatar
              style={{ marginRight: "10px" }}
              anchorEl={anchorElAvatar}
              onClick={handleClickAvatar}
              aria-label="recipe"
              className={`${classes.largeAvatar} ${classes.avatar}`}
              src={img}
            >
              {userService.getloggedinuser().name
                ? userService.getloggedinuser().name[0].toUpperCase()
                : null}
            </Avatar>
            <Grid container>
              <Grid item xs={12}>
                {" "}
                <Typography variant="h6">
                  {userService.getloggedinuser().name}
                </Typography>
                <Typography>
                  {userService.getloggedinuser().email
                    ? userService.getloggedinuser().email
                    : null}
                </Typography>
                <hr />
                <Typography variant="h6">
                  Credit score: <b>788</b>
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          <></>
        )}
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItem
          button
          onClick={() => {
            userService.logout();
            dispatch(falseLogin());
            // if (isTabletOrMobileDevice) props.handleDrawerToggle();
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={"Sign out"} />
        </ListItem>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <ListItem
          button
          onClick={() => {
            props.history.push("/account");
          }}
        >
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary={"Profile"} />
        </ListItem>
      </MenuItem>
      <Divider />
      {userService.getloggedinuser() ? (
        userService.getloggedinuser().role == true ? (
          <>
            <MenuItem onClick={handleMenuClose}>
              <ListItem
                button
                onClick={() => {
                  props.history.push("/admin");
                }}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Admin Panel"} />
              </ListItem>
            </MenuItem>
            <Divider />
          </>
        ) : null
      ) : null}
      {userService.getloggedinuser() ? (
        true ? (
          <MenuItem onClick={handleMenuClose}>
            <ListItem
              button
              onClick={() => {
                props.history.push("/dashboard");
              }}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
          </MenuItem>
        ) : null
      ) : null}
      <Divider />
    </Menu>
  );

  return (
    <>
      {isLoggedInRedux ? (
        <NavItem className="nav-item-n-white intro-button2">
          <NavLink
            href="#"
            style={{ cursor: "pointer" }}
            onClick={() => {
              userService.logout();
              dispatch(switchLogin());
            }}
          >
            Logout
          </NavLink>
        </NavItem>
      ) : (
        <>
          <NavItem className="nav-item-n-white intro-button2">
            <NavLink
              href="#"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.history.push("/login");
              }}
            >
              Login
            </NavLink>
          </NavItem>
          <NavItem className="nav-item-n-white intro-button3">
            <NavLink
              href="#"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.history.push("/register");
              }}
            >
              Sign up
            </NavLink>
          </NavItem>
        </>
      )}
      {isLoggedInRedux ? (
        <Tooltip title={userService.getloggedinuser().name}>
          <span style={{ margin: "0px 10px 0px 10px" }}>
            <Avatar
              anchorEl={anchorElAvatar}
              onClick={handleClickAvatar}
              aria-label="recipe"
              className={classes.avatar}
              src={img}
            >
              {userService.getloggedinuser().name
                ? userService.getloggedinuser().name[0].toUpperCase()
                : null}
            </Avatar>
          </span>
        </Tooltip>
      ) : (
        <></>
      )}

      {renderMenu}
    </>
  );
};

export default withRouter(NavLoginSignUpButtons);
