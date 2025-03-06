import { Card, Typography, Box } from "@mui/material";

function CardComponent({ icon, title, value, imagePath }) {
    return (
        <Card
            sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: 5,
                boxShadow: 2,
                width: 300,
                height: 80,
                bgcolor: "#fff",
                ml:5
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: "100%",
                }}
            >
                {imagePath ? (
                    <img src={imagePath} alt={title} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                ) : (
                    icon
                )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#6c757d" }}>
                    {title}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                    {value}
                </Typography>
            </Box>
        </Card>
    );
}

export default CardComponent;




