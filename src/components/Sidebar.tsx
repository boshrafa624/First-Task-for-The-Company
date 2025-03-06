import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, Collapse, Button, Typography, IconButton, Box } from "@mui/material";
import { ExpandLess, ExpandMore, Logout, Home, Store, People, ShoppingCart, ChevronRight, Receipt } from "@mui/icons-material";

const Sidebar = () => {
    const [openWarehouses, setOpenWarehouses] = useState(false);

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            
            sx={{
                top: 80,
                width: 250,
                flexShrink: 0,
                "& .MuiDrawer-paper": { width: 250, bgcolor: "#fff", p: 2 }
            }}
        >
            <List>
                <Typography variant="h6" sx={{ p: 2, fontWeight: "bold", color: "#2196f3" }}>Tabs</Typography>
                <ListItem sx={{ "&:hover": { bgcolor: "#e3f2fd" } }}>
                    <Home sx={{ mr: 1, color: "#2196f3" }} />
                    <ListItemText primary="Home" />
                    <IconButton
                        sx={{
                            backgroundColor: "#2196F3",
                            color: "white",
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            "&:hover": {
                                backgroundColor: "#1976D2",
                            },
                        }}
                    >
                        <ChevronRight />
                    </IconButton>
                </ListItem>
                <ListItem sx={{ "&:hover": { bgcolor: "#e3f2fd" } }}>
                    <Store sx={{ mr: 1, color: "#2196f3" }} />
                    <ListItemText primary="Branches" />
                    <IconButton
                        sx={{
                            backgroundColor: "#2196F3",
                            color: "white",
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            "&:hover": {
                                backgroundColor: "#1976D2",
                            },
                        }}
                    >
                        <ChevronRight />
                    </IconButton>
                </ListItem>

                <ListItem onClick={() => setOpenWarehouses(!openWarehouses)} sx={{ "&:hover": { bgcolor: "#e3f2fd" } }}>
                    <Store sx={{ mr: 1, color: "#2196f3" }} />
                    <ListItemText primary="Warehouses" />
                    <IconButton
                        onClick={() => setOpenWarehouses(!openWarehouses)}
                        sx={{
                            backgroundColor: "#2196F3",
                            color: "white",
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            transition: "0.3s",
                            "&:hover": {
                                backgroundColor: "#1976D2",
                            },
                        }}
                    >
                        {openWarehouses ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>

                </ListItem>
                <Collapse in={openWarehouses} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem sx={{
                            pl: 4, "&:hover": {
                                backgroundColor: "#dee2e6",
                            },
                        }}>
                            <ListItemText primary="Add new warehouse" />
                        </ListItem>
                        <ListItem sx={{
                            pl: 4, "&:hover": {
                                backgroundColor: "#dee2e6",
                            },
                        }}>
                            <ListItemText primary="All warehouses" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem sx={{ "&:hover": { bgcolor: "#e3f2fd" } }}>
                    <People sx={{ mr: 1, color: "#2196f3" }} />
                    <ListItemText primary="Employees" />
                    <IconButton
                        sx={{
                            backgroundColor: "#2196F3",
                            color: "white",
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            "&:hover": {
                                backgroundColor: "#1976D2",
                            },
                        }}
                    >
                        <ChevronRight />
                    </IconButton>
                </ListItem>
                <ListItem sx={{ "&:hover": { bgcolor: "#e3f2fd" } }}>
                    <ShoppingCart sx={{ mr: 1, color: "#2196f3" }} />
                    <ListItemText primary="Products" />
                    <IconButton
                        sx={{
                            backgroundColor: "#2196F3",
                            color: "white",
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            "&:hover": {
                                backgroundColor: "#1976D2",
                            },
                        }}
                    >
                        <ChevronRight />
                    </IconButton>
                </ListItem>
                <ListItem sx={{ "&:hover": { bgcolor: "#e3f2fd" } }}>
                    <Receipt sx={{ mr: 1, color: "#2196f3" }} />
                    <ListItemText primary="Invoices & Transactions" />
                    <IconButton
                        sx={{
                            backgroundColor: "#2196F3",
                            color: "white",
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            "&:hover": {
                                backgroundColor: "#1976D2",
                            },
                        }}
                    >
                        <ChevronRight />
                    </IconButton>
                </ListItem>

                <Box sx={{ position: "absolute", bottom: 20, width: "90%", ml: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<Logout />}
                        fullWidth
                        sx={{ borderRadius: 2, top: 120 }}
                    >
                        Logout
                    </Button>
                </Box>
            </List>
        </Drawer>
    );
};

export default Sidebar;
