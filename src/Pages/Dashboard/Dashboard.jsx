import React from 'react';
import {Box, Grid, Container} from "@mui/material";
import TopBar from "../../Components/TopBar/TopBar";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer";
const Dashboard = () => {
    return (
        <Box>
            <Box>
                <TopBar></TopBar>
            </Box>
            <Box sx={{p: 7}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <LeftSideBar></LeftSideBar>
                    <Outlet/>
                </Grid>
            </Box>
            <Box>
                <Footer></Footer>
            </Box>
        </Box>
    );
};

export default Dashboard;