import React, {useEffect, useState} from 'react';
import {
    Button,
    TableHead,
    Grid,
    Paper,
    TextField,
    Typography,
    TableContainer,
    Table,
    TableCell,
    TableBody,
    TableRow,
    CircularProgress
} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";
import SingleCart from "./SingleCart";
const Cart = () => {
    const {stockGet} = UseAPI()
    const [stocks, setStocks] = useState([])
    useEffect(()=>{
        stockGet(setStocks)
    },[])
    if(stocks.length === 0){
        return (
            <Grid sx={{display: 'flex', justifyContent: 'center',  mt: 5}} item xs={12} sm={8} md={8}>
                <CircularProgress />
            </Grid>
        )
    }else{
        return (
            <Grid sm={9} item md={9} xs={12}>
                <Paper elevation={3} sx={{p: 4}}>
                    <Typography variant="h6" sx={{textAlign: 'center', mb: 4}}>Cart Product Total: {stocks?.length}</Typography>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Selling Price</TableCell>
                                    <TableCell>Total Qty</TableCell>
                                    <TableCell>Cart Item</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stocks.map((row) => <SingleCart cart={row}></SingleCart>)}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        );
    }

};

export default Cart;