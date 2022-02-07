import React from 'react';
import {Box, Button, Grid, Paper, TextField} from "@mui/material";
import { useForm } from 'react-hook-form';
import UseAPI from "../../Hooks/UseAPI";
const Cost = () => {
    const { register, handleSubmit} = useForm();
    const {costCreate} = UseAPI()
    const onSubmit = (data, e) =>{
        costCreate(data,e)
    }

    return (
        <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3} sx={{p: 5}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item sx={12} sm={6} md={6}>
                        <Box sx={{mb: 2}}>
                            <TextField
                                label="Cost Title"
                                type="text"
                                sx={{width: '100%'}}
                                {...register('costTitle')}
                                required={true}
                            />
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={6} md={6}>
                        <Box sx={{mb: 2}}>
                            <TextField
                                label="Cost Taka"
                                type="number"
                                sx={{width: '100%'}}
                                {...register('costTaka')}
                                required={true}
                            />
                        </Box>
                    </Grid>
                    <Grid item sx={12} sm={6} md={6}>
                        <Box sx={{mb: 2}}>
                            <TextField
                                type="date"
                                sx={{width: '100%'}}
                                {...register('costDate')}
                                required={true}
                            />
                        </Box>
                    </Grid>
                </Grid>
                    <Button variant="contained" type="submit">Add Cost</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default Cost;