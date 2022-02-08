import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Grid,Paper,Typography} from "@mui/material";
import {useEffect, useState} from "react";
import UseAPI from "../../Hooks/UseAPI";
import {DeleteOutline} from "@mui/icons-material";

export default function ListProduct() {
    const imgUrl = "http://localhost:7080/assets/products/"
    const [products, setProducts] = useState([])
    const {productGet,productDelete, deleteStock} = UseAPI()
    useEffect(()=>{
        productGet(setProducts)
    },[])
    const handleDelete = (id) =>{
        productDelete(id, setProducts, products)
        deleteStock(id)
    }

    // const addToCart = (id) =>{
    //     console.log("ID: ",id)
    //     const data = products.filter((product)=>product._id === id)
    //     console.log('Data Product: ', data[0]._id)
    //     const proInfo = {
    //         productId: data[0]._id,
    //         img: data[0].img,
    //         sellingPrice: data[0].sellingPrice,
    //         buyPrice: data[0].buyPrice,
    //         quantity: data[0].productQty,
    //         name:data[0].productName
    //     }
    //     console.log('Data: ', proInfo)
    //     cartCreate(proInfo)
    // }

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
                        {params?.row?.productName}
                    </div>
                );
            },
        },

        {   field: 'categoryName', headerName: 'Category Name', width: 150, renderCell: (params) => {
                return (
                    <Typography variant="p">
                        {params?.row?.categoryName}
                    </Typography>
                );
            },
        },
        {   field: 'brandName', headerName: 'Brand Name', width: 130, renderCell: (params) => {
                return (
                    <Typography variant="p">
                        {params?.row?.brandName}
                    </Typography>
                );
            },
        },
        {   field: 'productSerialNo', headerName: 'Product No'},
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            sx={{cursor: 'pointer', mx: 2, color: 'red'}}
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },

    ];
    return (
        <Grid sm={8} item md={8} xs={12}>
            <Paper elevation={3} sx={{p: 3}}>
                <div style={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={products}
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