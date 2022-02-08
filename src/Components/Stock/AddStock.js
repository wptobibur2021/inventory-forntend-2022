import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Input, MenuItem, Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import UseAPI from "../../Hooks/UseAPI";

const AddStock = () => {
    const { register, handleSubmit} = useForm();
    const [products, setProducts] = useState([])
    const {productGet,stockCreate,brandGet} = UseAPI()
    const [brands, setBrand] = useState([])
    useEffect(()=>{
        productGet(setProducts)
    },[])
    // Get Employee From Database
    useEffect(()=>{
        brandGet(setBrand)
    },[])

    const onSubmit = (data, e) =>{
        const productId = products.find((id)=>id._id === data.productId)
        console.log('Product Id: ', productId.brandName)
        data.brandName = productId.brandName
        data.catName = productId.categoryName
        stockCreate(data,e)
    };
    return (
        <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3} sx={{p: 5}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Product Name"
                                    select
                                    sx={{width: '100%'}}
                                    {...register('productId')}
                                    required={true}
                                >
                                    {products.map((option) => (
                                        <MenuItem key={option._id} value={option._id}>
                                            {option.productName}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Product Quantity"
                                    type="number"
                                    sx={{width: '100%'}}
                                    {...register('productQty')}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Buying Price"
                                    type="number"
                                    {...register('buyPrice')}
                                    sx={{width: '100%'}}
                                    required={true}
                                />
                            </Box>
                        </Grid>

                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Selling Price"
                                    type="number"
                                    {...register('salesPrice')}
                                    sx={{width: '100%'}}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Button variant="contained" type="submit">Add Stock</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AddStock;