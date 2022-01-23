import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Grid,
    Input,
    MenuItem,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    TextField,
    Typography
} from "@mui/material";
import {Cancel, ShoppingCart} from "@mui/icons-material";
import UseAPI from "../../Hooks/UseAPI";
import {useForm} from "react-hook-form";
import axios from "axios";
import SingleCart from "../Cart/SingleCart";
import { useNavigate } from "react-router-dom";

const AddOrder = ()=>{
    const navigate = useNavigate();
    const { register, handleSubmit} = useForm();
    const {employeeGet, customerGet, cartGet, orderCreate, deleteCart} = UseAPI()
    const [employee, setEmployee] = useState([])
    const [customer, setCustomer] = useState([])
    const [carts, setCarts] = useState([])
    const [pro, setProInfo] = useState([])
    //const [cartId, setCartId] = useState([])
    // Get Carts From Database
    useEffect(()=>{
        cartGet(setCarts)
    },[])
    // Get Employee From Database
    useEffect(()=>{
        employeeGet(setEmployee)
    },[])
    // Get Brand From Database
    useEffect(()=>{
        customerGet(setCustomer)
    },[])

    //let cartId = []
    let totalPrice = 0;
    carts.map((cart)=>{
        //cartId.push(cart.productId._id)
       // setProInfo({_id, ...cart})
        totalPrice+=cart.totalPrice
    })
    const onSubmit = (data, e) =>{
        //data.cartId = cartId
        data.totalPrice = totalPrice
        data.carts = carts
        data.ordersNo = Math.floor(Math.random() * (10 , 2000) + 30)
        console.log('Order Data', data)
        orderCreate(data, e, navigate)
        deleteCart()
        navigate('/dashboard/all-order')
    };
    return (
        <Grid item xs={12} sm={9} md={9}>
            <Paper elevation={3} sx={{p: 5}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Employee"
                                    select
                                    sx={{width: '100%'}}
                                    {...register('employeeId')}
                                    required={true}
                                >
                                    {employee.map((option) => (
                                        <MenuItem key={option._id} value={option._id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Employee"
                                    select
                                    sx={{width: '100%'}}
                                    {...register('customerId')}
                                    required={true}
                                >
                                    {customer.map((option) => (
                                        <MenuItem key={option._id} value={option._id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Grid>
                        <Typography variant="h6" sx={{textAlign: 'center', mb: 4}}>Cart Product Total: {carts?.length}</Typography>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell align="right">Selling Price</TableCell>
                                        <TableCell align="right">Total Qty</TableCell>
                                        <TableCell align="right">Total Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        carts.map((cart)=>(
                                            <TableRow
                                                key={cart._id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {cart.productId.productName}
                                                </TableCell>
                                                <TableCell align="right">{cart.salesPrice} TK</TableCell>
                                                <TableCell align="right">{cart.qty}</TableCell>
                                                <TableCell align="right">{cart.totalPrice} Tk</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                    <Typography sx={{my: 3}}>Total Price: {totalPrice} Taka</Typography>
                                </TableBody>
                            </Table>
                        </TableContainer>





                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box sx={{mb: 2}}>*/}
                        {/*        <TextField*/}
                        {/*            label="Product Quantity"*/}
                        {/*            {...register('productQty')}*/}
                        {/*            type="number"*/}
                        {/*            sx={{width: '100%'}}*/}
                        {/*            required={true}*/}
                        {/*        />*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box sx={{mb: 2}}>*/}
                        {/*        <TextField*/}
                        {/*            type="Date"*/}
                        {/*            {...register('buyDate')}*/}
                        {/*            sx={{width: '100%'}}*/}
                        {/*            required={true}*/}
                        {/*        />*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box>*/}
                        {/*        <TextField*/}
                        {/*            sx={{width: '100%', mb: 2}}*/}
                        {/*            type="number"*/}
                        {/*            {...register('buyPrice')}*/}
                        {/*            label="Buying Price"*/}
                        {/*        >*/}
                        {/*        </TextField>*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box>*/}
                        {/*        <TextField*/}
                        {/*            sx={{width: '100%', mb: 2}}*/}
                        {/*            type="number"*/}
                        {/*            label="Selling Price"*/}
                        {/*            {...register('sellingPrice')}*/}
                        {/*        >*/}
                        {/*        </TextField>*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}

                    </Grid>
                    <Button variant="contained" type="submit">Order Confirm</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AddOrder;