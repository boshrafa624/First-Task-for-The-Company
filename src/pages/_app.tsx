import React, { useState } from 'react';
import { Box, Grid, Typography, Drawer, Button, Card, CardContent } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import WarehouseTable from '../components/Table';
import CardComponent from '../components/Card';
import ProductCard from '../components/CardPruduct';
import Image from 'next/image';

function MyApp() {
  const [sidebarOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '2000px', bgcolor: '#f5f8fb', color: '#000000' }}>
      <Navbar />
      <Box sx={{ display: 'flex', flexGrow: 1, marginTop: '80px' }}>
        <Drawer
          variant="persistent"
          anchor="left"
          open={sidebarOpen}
          sx={{ '& .MuiDrawer-paper': { width: '250px', top: '80px', height: 'calc(100% - 80px)', position: 'fixed' } }}
        >
          <Sidebar />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, transition: 'margin 0.3s', marginLeft: sidebarOpen ? '250px' : '0' }}>
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={12} md={4}>
              <CardComponent icon={<Image src="/icon.png" alt="Icon" width={50} height={50} />} title="Total Warehouses" value="12" imagePath="/Home.png" />
            </Grid>
            <Grid item xs={12} md={4}>
              <CardComponent icon={<Image src="/icon.png" alt="Icon" width={50} height={50} />} title="1st Warehouse in Purchase" value="w116-Main Branch" imagePath="/S.png" />
            </Grid>
            <Grid item xs={12} md={4}>
              <CardComponent icon={<Image src="/icon.png" alt="Icon" width={50} height={50} />} title="1st Warehouse in Sales" value="w112-Main Branch" imagePath="/card.png" />
            </Grid>
          </Grid>
          <WarehouseTable />
          <Box sx={{ mt: 30 }} />
          <hr />
          <Box sx={{ mt: 10 }} />
          <Box sx={{ borderRadius: 2, ml: 25 }}>
            <Grid container spacing={0}>
              <Grid item md={5} container direction="column">
                <Grid item>
                  <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    TOP <span style={{ color: "#007bff" }}>3</span> PRODUCTS THIS
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    MONTH <span style={{ color: "#007bff" }}> at </span> ALL WAREHOUSES
                  </Typography>
                </Grid>
                <Grid item sx={{ mt: 2 }}>
                  <ProductCard
                    rank={2}
                    imageUrl="/Shose1.png"
                    totalSales={144}
                    totalRevenue={5760}
                    productName="ADIDAS SHOES SPORT Z12"
                    price={55}
                    productLink="https://example.com/product"
                    width={400}
                    height={200}
                  />
                </Grid>
              </Grid>
              <Grid item md={5} container direction="column" spacing={2}>
                <Grid item>
                  <ProductCard
                    rank={1}
                    imageUrl="/Shouse2.png"
                    totalSales={144}
                    totalRevenue={5760}
                    productName="NIKE SHOES X-47"
                    price={40}
                    productLink="https://example.com/product"
                    width={400}
                    height={200}
                  />
                </Grid>
                <Card sx={{ width: 400, height: 80, borderRadius: 2, boxShadow: 3, position: "relative", backgroundColor: "#62b0f0", mt: 1, ml: 2 }}>
                  <CardContent sx={{ display: "flex", flexDirection: "column", height: "100%", padding: 1.5 }}>
                    <Typography variant="h6" color="#fff" sx={{ position: "absolute", top: 5, left: 5, fontSize: 14 }}>
                      3rd
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 1, marginLeft: 45 }}>
                      <div>
                        <Typography variant="h6" fontWeight="bold" noWrap sx={{ fontSize: 12 }}>
                          ADIDAS SHOES WOMEN X-22
                        </Typography>
                        <Typography variant="body1" sx={{ color: "white", fontSize: 11 }}>
                          37.50 $
                        </Typography>
                      </div>
                    </div>
                    <Button
                      href="#"
                      size="small"
                      sx={{ position: "absolute", bottom: 5, right: 5, textTransform: "none", fontSize: 10, color: "#fff" }}
                    >
                      → SHOW PRODUCT
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MyApp;