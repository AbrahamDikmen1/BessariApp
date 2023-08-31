import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router";
import { ListItemText } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../../features/authSlice";
import { navTabs } from "./StyledNavbar";
import profilePicture from "../../assets/nedladdning.jpg";
function Navbar() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(auth);

  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [page, setPage] = useState("");
  const [state, setState] = useState({
    left: false,
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const routeToHomePage = () => {
      switch (page) {
        case "Om Oss":
          navigate("/about");
          setPage("");
          break;

        case "Kontakta Oss":
          navigate("/contact");
          setPage("");
          break;

        case "Nyheter":
          navigate("/news");
          setPage("");
          break;
      }
    };
    routeToHomePage();
  }, [navigate, page]);

  const settings = [
    {
      text: (
        <span
          onClick={() => {
            navigate("/adminProfile");
          }}
        >
          {" "}
          Profil{" "}
        </span>
      ),
    },

    {
      text: (
        <span
          onClick={() => {
            navigate("/feed");
          }}
        >
          {" "}
          Skapa inlägg{" "}
        </span>
      ),
    },

    {
      icon: <LogoutIcon />,

      text: (
        <span
          onClick={() => {
            dispatch(logoutUser(null));
          }}
        >
          {" "}
          Logga ut{" "}
        </span>
      ),
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        mr: 2,
        backgroundColor: "none",
        boxShadow: "none",
        display: {
          xs: "flex",
          md: "none",
        },

        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "inherit",
        textDecoration: "none",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navTabs &&
          navTabs.map((tab, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => setPage(tab.text)}
              to={tab.route}
            >
              <ListItemButton>
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <div style={{ marginRight: "1vh" }}>{tab.icon} </div>
                </div>
                <ListItemText primary={tab.text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobil skärm  */}

          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              bgcolor: "transparent",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon onClick={toggleDrawer(anchor, true)}>
                    {anchor}
                  </MenuIcon>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>

          {/* Stationär  */}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {navTabs.map((tab2, index2) => (
              <Button
                key={index2}
                onClick={() => setPage(tab2.text)}
                to={tab2.route}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {tab2.text}
              </Button>
            ))}
          </Box>

          {auth._id ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={profilePicture} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting.text} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting.text}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            ""
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
