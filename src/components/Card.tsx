import { Card, Typography, Box } from "@mui/material";
import Image from "next/image";
type CardProps = {
    icon: React.ReactNode;  
    title: string;          
    value: string;         
    imagePath: string;      
  };

const CardComponent: React.FC<CardProps> = ({ icon, title, value, imagePath }) => {
    return (
        <Card
            sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                borderRadius: 5,
                boxShadow: 2,
                width: 280,
                height: 80,
                bgcolor: "#fff",
                ml: 5,
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
                    <Image 
                        src={imagePath} 
                        alt={title} 
                        width={40} 
                        height={40} 
                        style={{ objectFit: "contain" }} 
                    />
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
