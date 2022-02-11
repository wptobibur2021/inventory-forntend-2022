import React,{useEffect, useState} from 'react';
import UseAPI from "../../Hooks/UseAPI";
import {Box, Button, Grid, Paper, TextField, Typography} from "@mui/material";
import { useForm } from 'react-hook-form';
const Income = () => {
    const { register, handleSubmit} = useForm();
    const {monthlyIncome,salesIncome} = UseAPI()
    const onSubmit = (data, e) =>{
        console.log('Data: ', data)
        monthlyIncome(data,e)
    }
    useEffect(()=>{
        salesIncome()
    },[])
    return (
        <Grid sm={8} item md={8} xs={12}>
            <Paper elevation={3} sx={{p: 3}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item sx={12} sm={6} md={6}>
                        <Box sx={{mb: 2}}>
                            <Typography variant="h6">From Date</Typography>
                            <TextField
                                type="date"
                                sx={{width: '100%'}}
                                {...register('formDate')}
                                required={true}
                            />
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={6} md={6}>
                        <Box sx={{mb: 2}}>
                            <Typography variant="h6">End Date</Typography>
                            <TextField
                                type="date"
                                sx={{width: '100%'}}
                                {...register('endDate')}
                                required={true}
                            />
                        </Box>
                    </Grid>
                </Grid>
                    <Button variant="contained" type="submit">Search</Button>
                </form>
            </Paper>
        </Grid>
    );
};
export default Income;