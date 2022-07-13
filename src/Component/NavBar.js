import React from "react";
import Fab from "@mui/material/Fab";
import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import ToolBar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import SettingIcon from "@mui/icons-material/BrightnessLow";
import Notification from "@mui/icons-material/NotificationsNone";

function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchor, setAnchor] = React.useState(null);

  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <Box>
      <AppBar color="inherit">
        <ToolBar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography component="div" variant="h6" sx={{ flexGrow: 1 }}>
            Darab
          </Typography>
          <Typography component="div" variant="h6" sx={{ mr: 2 }}>
            JOBS
          </Typography>
          <Fab fontSize="small">
            <Notification />
          </Fab>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                sx={{ mt: 6 }}
                anchorEl={anchor}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchor)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} icon>
                  <ListItemIcon>
                    <SettingIcon />
                  </ListItemIcon>{" "}
                  My Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </ToolBar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
