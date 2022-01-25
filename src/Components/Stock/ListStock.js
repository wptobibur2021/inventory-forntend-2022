import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Grid,Paper,Typography} from "@mui/material";
import {useEffect, useState} from "react";
import UseAPI from "../../Hooks/UseAPI";
import {DeleteOutline} from "@mui/icons-material";

export default function ListStock() {
    const imgUrl = "https://inventory-reactjs-2022.web.app/assets/products/"
    const [stocks, setStocks] = useState([])
    const {stockGet} = UseAPI()
    useEffect(()=>{
        stockGet(setStocks)
    },[])
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