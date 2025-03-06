import React, { useState } from "react";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Button,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";

const Navbar: React.FC = () => {
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const openUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const closeUserMenu = () => {
    setUserMenuAnchor(null);
  };

  const openLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  const closeLanguageMenu = (language?: string) => {
    if (language) setSelectedLanguage(language);
    setLanguageMenuAnchor(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "white",
        color: "black",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
        width: "100%",
        px: 2,
        top: 0,
        left: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: 100 }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo.png" alt="MELO Logo" width={40} height={40} style={{ marginRight: 8 }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1976d2" }}>
            MELO
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box sx={{ position: "relative", display: "flex", alignItems: "center", width: "40%" }}>
          <SearchIcon sx={{ position: "absolute", left: 12, color: "gray", zIndex: 1 }} />
          <InputBase
            placeholder="Search"
            sx={{
              bgcolor: "#F1F3F4",
              borderRadius: 1,
              pl: 5,
              py: 1,
              width: "100%",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button onClick={openLanguageMenu} sx={{ textTransform: "none", color: "primary.main" }}>
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

          <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={openUserMenu}>
            <Avatar sx={{ width: 36, height: 36 }}>
              <Image src="/profile.png" alt="profile" width={36} height={36} />
            </Avatar>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", ml: 1 }}>
              <Typography variant="body2">Welcome back</Typography>
              <Typography variant="body2" sx={{ color: "#1976d2", fontWeight: "bold", fontSize: 14 }}>
                Boshra
              </Typography>
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
