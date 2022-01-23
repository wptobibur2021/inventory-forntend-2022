import React from 'react';
import {Box, Button, Grid, Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import UseAPI from "../../Hooks/UseAPI";

const AddCustomer = () => {
    const { register, handleSubmit} = useForm();
    const {customerCreate} = UseAPI()
    const onSubmit = (data, e) =>{
        customerCreate(data, e)
    };
    return (
        <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3} sx={{p: 5}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item sm={4} md={4} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Customer Name"
                                    type="text"
                                    sx={{width: '100%'}}
                                    {...register('name')}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={4} md={4} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Shop Name"
                                    type="text"
                                    sx={{width: '100%'}}
                                    {...register('shopName')}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={4} md={4} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Address"
                                    type="text"
                                    {...register('address')}
                                    sx={{width: '100%'}}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="National NID No"
                                    {...register('nid')}
                                    type="number"
                                    sx={{width: '100%'}}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box>
                                <TextField
                                    sx={{width: '100%', mb: 2}}
                                    type="number"
                                    label="Mobile Number"
                                    {...register('mobileNo')}
                                    required={true}
                                >
                                </TextField>
                            </Box>
                        </Grid>
                    </Grid>
                    <Button variant="contained" type="submit">Add Employee</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AddCustomer;