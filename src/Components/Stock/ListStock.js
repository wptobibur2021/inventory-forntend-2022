import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box, Grid, MenuItem, Paper, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import UseAPI from "../../Hooks/UseAPI";

export default function ListStock() {
    const imgUrl = "https://inventory-reactjs-2022.web.app/assets/products/"
    const [stocks, setStocks] = useState([])
    const {stockGet,brandGet} = UseAPI()
    useEffect(()=>{
        stockGet(setStocks)
    },[])
    const [brands, setBrand] = useState([])
    const [brandName, setBrandName] = useState('')
    // Get Employee From Database
    useEffect(()=>{
        brandGet(setBrand)
    },[])
    useEffect(()=>{
        stockGet(setStocks, brandName)
    },[brandName])
    console.log('Stock Product: ', stocks)
    const columns = [
        //const {productName} = row
        {
            field: "productName",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        {/*<img className="productListImg" src={imgUrl + params.row.img} alt={params.row.productName} />*/}
                        {params.row.productId.productName}
                    </div>
                );
            },
        },
        {   field: 'brandName', headerName: 'Brand Name', width: 130, renderCell: (params) => {
                return (
                    <Typography variant="p">
                        {params?.row?.productId?.brandName}
                    </Typography>
                );
            },
        },
        {   field: 'salesPrice', headerName: 'Sales Price', width: 130, renderCell: (params) => {
                return (
                    <Typography variant="p">
                        {params?.row?.salesPrice} Tk
                    </Typography>
                );
            },
        },

        {   field: 'productQty', headerName: 'Product Qty', width: 150, renderCell: (params) => {
                return (
                    <Typography variant="p">
                        {params?.row?.productQty}
                    </Typography>
                );
            },
        },

        {   field: 'subtotalPrice', headerName: 'Sub Total', width: 150, renderCell: (params) => {
                return (
                    <Typography variant="p">
                        {params?.row?.productQty * params?.row?.salesPrice} Tk
                    </Typography>
                );
            },
        },
    ];
    return (
        <Grid sm={8} item md={8} xs={12}>
            <Paper elevation={3} sx={{p: 3}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item sm={6} md={6} xs={12}>
                        <Box sx={{mb: 2}}>
                            <TextField
                                label="Brand Name"
                                select
                                sx={{width: '100%'}}
                                value={brandName}
                                onChange={(e)=>setBrandName(e.target.value)}
                            >
                                {brands.map((option) => (
                                    <MenuItem key={option._id} value={option.brandName}>
                                        {option.brandName}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={6} xs={12}>
                        <Box sx={{mb: 2}}>
                            <Typography variant="h6" sx={{textAlign: 'center', mb: 4}}>Total Orders: {stocks?.length}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <div style={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={stocks}
                        columns={columns}
                        pageSize={10}
                        getRowId={(row)=>row._id}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </Paper>
        </Grid>
    );
}