import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

function ProductCard({
    rank,
    imageUrl,
    totalSales,
    totalRevenue,
    productName,
    price,
    productLink,
    width , 
    height  , 
}) {
    return (
        <Card sx={{ width, height, borderRadius: 2, boxShadow: 3, position: 'relative' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 2 }}>

                <Typography variant="h6" color="primary" sx={{ position: 'absolute', top: 10, left: 10 }}>
                    {rank}st
                </Typography>


                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 60 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 60, height: 60, objectFit: 'cover', marginRight: 2 }}
                        image={imageUrl}
                        alt={productName}
                    />
                    <div>
                        <Typography variant="body2" noWrap sx={{color:"grey"}}>
                            Total sales: {totalSales} = {totalRevenue} $
                        </Typography>
                        <Typography variant="h6" fontWeight="bold" noWrap>
                            {productName}
                        </Typography>
                        <Typography variant="body1" sx={{color:"grey"}}
                        >{price} $</Typography>
                    </div>
                </div>


                <Button
                    href={productLink}
                    size="small"
                    color="primary"
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        textTransform: 'none',
                    }}
                >
                    → SHOW PRODUCT
                </Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;



