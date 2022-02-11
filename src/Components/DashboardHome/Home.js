import React, {useEffect, useMemo, useState} from 'react';
import {Grid, Paper,Card,CardContent,Typography,Box} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";
import Overview from "./Overview/Overview";
import Income from "./Income/Income";

const Home = () => {
    return (
        <Grid sm={8} item md={8} xs={12}>
            <Overview></Overview>
            <Income></Income>
        </Grid>
    );
};

export default Home;