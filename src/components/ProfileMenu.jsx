import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/UserSlice";
import PopupLogin from "./PopupLogin";

export default function ProfileMenu({ isLoggedIn }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [createaccflag, setcreateaccflag] = useState(false);
  const [loginfromflag, setloginformflag] = useState(false);

  const handleOpen = (event) => {
    if (anchorEl) return;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onMouseEnter={handleOpen} sx={{ p: 0 }}>
        <Avatar alt="Profile" />
      </IconButton>

      {isLoggedIn && <span>Welcome {isLoggedIn.FirstName} !!</span>}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {isLoggedIn
          ? [
              <MenuItem
                key="profile"
                onClick={() => {
                  handleClose();
                  navigate("/dashboard");
                }}
              >
                My Profile
              </MenuItem>,

              <Divider key="divider" />,

              <MenuItem
                key="logout"
                onClick={() => {
                  handleClose();
                  dispatch(logout());
                  navigate("/");
                }}
              >
                Logout
              </MenuItem>,
            ]
          : [
              <MenuItem
                key="login"
                onClick={() => {
                  handleClose();
                  setloginformflag(true);
                  setcreateaccflag(false);
                }}
              >
                Login
              </MenuItem>,

              <MenuItem
                key="signup"
                onClick={() => {
                  handleClose();
                  setcreateaccflag(true);
                  setloginformflag(false);
                }}
              >
                Sign Up
              </MenuItem>,
            ]}
      </Menu>

      {(loginfromflag || createaccflag) && (
        <PopupLogin
          loginfromflag={loginfromflag}
          setloginformflag={setloginformflag}
          createaccflag={createaccflag}
          setcreateaccflag={setcreateaccflag}
        />
      )}
    </>
  );
}
