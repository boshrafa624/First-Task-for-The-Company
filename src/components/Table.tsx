import React from "react";
import { Box, Button, IconButton, TextField, Table, Checkbox, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SearchIcon from "@mui/icons-material/Search";


const columns = [
    { field: "id", headerName: "Number" },
    { field: "branch", headerName: "Branch" },
    { field: "address", headerName: "Address" },
    { field: "capacity", headerName: "Capacity" },
    { field: "numProducts", headerName: "Number of Products" },
    { field: "lastEntry", headerName: "Last Entry" },
    { field: "lastDispatch", headerName: "Last Dispatch" },
    { field: "actions", headerName: "Actions" },
];

const rows = Array.from({ length: 7 }, () => ({
    id: 10,
    branch: "Main Branch",
    address: "Syria Idlib",
    capacity: 2000,
    numProducts: 1900,
    lastEntry: "12/08/2024",
    lastDispatch: "12/08/2024",
}));

const WarehouseTable = () => {
    return (
        <Box sx={{ height: 500, width: "100%", p: 2, backgroundColor: "#f5f8fb" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Box>
                    <SearchIcon sx={{ color: "gray", mr: 1 }} />
                    <TextField
                        placeholder="Search..."
                        variant="standard"
                        sx={{ width: 250 }}
                    />
                </Box>
                <Box>
                    <IconButton>
                        <ViewColumnIcon /><Typography variant="body1" color="grey" sx={{ ml: 2 }}>COLUMNS</Typography>
                    </IconButton>
                    <IconButton>
                        <FilterListIcon /> <Typography variant="body1" color="grey" sx={{ ml: 2 }}>FILTERS</Typography>
                    </IconButton>
                    <IconButton>
                        <DensityMediumIcon /> <Typography variant="body1" color="grey" sx={{ ml: 2 }}>DENSITY</Typography>
                    </IconButton>
                    <IconButton>
                        <FileDownloadIcon /> <Typography variant="body1" color="grey" sx={{ ml: 2 }}>EXPORT</Typography>
                    </IconButton>
                    <Button
                        variant="outlined"
                        sx={{
                            textTransform: "none",
                            borderRadius: "16px",
                            borderColor: "#BDBDBD",
                            color: "#424242",
                            padding: "4px 12px",
                            fontSize: "14px",
                            "&:hover": {
                                borderColor: "#9E9E9E",
                                backgroundColor: "#F5F5F5",
                            },
                        }}
                    >
                        add warehouse
                    </Button>
                </Box>
            </Box>

            <TableContainer component={Paper} sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 1 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ backgroundColor: "#f5f8fb" }}><Checkbox /></TableCell>
                            {columns.map((column) => (
                                <TableCell key={column.field} sx={{ fontWeight: "bold", backgroundColor: "#f5f8fb", color: "#2196F3" }}>
                                    {column.headerName}&#x21C5;
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell> <Checkbox /></TableCell>
                                <TableCell>{row.id} </TableCell>
                                <TableCell>{row.branch}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.capacity}</TableCell>
                                <TableCell>{row.numProducts}</TableCell>
                                <TableCell>{row.lastEntry}</TableCell>
                                <TableCell>{row.lastDispatch}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" size="small">
                                        Show
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default WarehouseTable;
