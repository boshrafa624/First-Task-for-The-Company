import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Menu, MenuItem, Avatar, Button } from "@mui/material";
import { Search as SearchIcon, Notifications as NotificationsIcon, ArrowDropDown as ArrowDropDownIcon } from "@mui/icons-material";

const Navbar = () => {
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const openUserMenu = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const closeUserMenu = () => {
    setUserMenuAnchor(null);
  };

  const openLanguageMenu = (event) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const closeLanguageMenu = (language) => {
    if (language) setSelectedLanguage(language);
    setLanguageMenuAnchor(null);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "white", color: "black", boxShadow: "0px 2px 4px rgba(0,0,0,0.1)", width: "100%", padding: "0 16px", top: 0, left: 0, zIndex: 1100 }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "80px" }}>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.png" alt="MELO Logo" width="40" height="40" style={{ marginRight: "8px" }} />
          <Typography variant="h6" style={{ fontWeight: "bold", color: "#1976d2" }}>MELO</Typography>
        </Box>

        <Box style={{ position: "relative", display: "flex", alignItems: "center", width: "40%" }}>
          <SearchIcon style={{ position: "absolute", left: "12px", color: "gray", zIndex: 1 }} />
          <InputBase
            placeholder="Search"
            style={{
              backgroundColor: "#F1F3F4",
              borderRadius: "4px",
              padding: "6px 8px 6px 40px",
              width: "100%",
            }}
          />
        </Box>


        <Box style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Button onClick={openLanguageMenu} style={{ textTransform: "none", color: "primary" }}>
            {selectedLanguage}
            <ArrowDropDownIcon />
          </Button>

          <Menu anchorEl={languageMenuAnchor} open={Boolean(languageMenuAnchor)} onClose={() => closeLanguageMenu()}>
            <MenuItem onClick={() => closeLanguageMenu("EN")}>English</MenuItem>
            <MenuItem onClick={() => closeLanguageMenu("AR")}>العربية</MenuItem>
          </Menu>

          <IconButton color="primary">
            <NotificationsIcon />
          </IconButton>

          <Box style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={openUserMenu}>
            <Avatar src="/profile.jpg" alt="User" style={{ width: "36px", height: "36px" }} />
            <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "8px" }}>
              <Typography variant="body2">Welcome back </Typography>
              <Typography variant="body2" style={{ color: "#1976d2", fontWeight: "bold", fontSize: "14px" }}>Boshra</Typography>
            </Box>
            <ArrowDropDownIcon />
          </Box>

          <Menu anchorEl={userMenuAnchor} open={Boolean(userMenuAnchor)} onClose={closeUserMenu}>
            <MenuItem onClick={closeUserMenu}>Profile</MenuItem>
            <MenuItem onClick={closeUserMenu}>Settings</MenuItem>
            <MenuItem onClick={closeUserMenu}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;