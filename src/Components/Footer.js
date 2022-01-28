import React from 'react';
import {Typography, Grid, Box} from '@mui/material'
const Footer = () => {
    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={4} sx={{py:3,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant="p">
                        &copy; Copyright 2021. Design & Development by <a target='_blank'>TechBD71</a>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;