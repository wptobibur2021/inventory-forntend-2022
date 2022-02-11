import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Grid,
    MenuItem,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead, TableRow,
    TextField,
    Typography
} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";
import {useForm} from "react-hook-form";
import { useNavigate,Link } from "react-router-dom";

const AddOrder = ()=>{
    const navigate = useNavigate();
    const { register, handleSubmit} = useForm();
    const {employeeGet, customerGet, cartGet, orderCreate, deleteCart} = UseAPI()
    const [employee, setEmployee] = useState([])
    const [customer, setCustomer] = useState([])
    const [carts, setCarts] = useState([])
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
    let totalPrice = 0;
    carts.map((cart)=>{
        totalPrice+=cart.totalPrice
    })
    const onSubmit = (data, e) =>{
        data.totalPrice = totalPrice
        data.carts = carts
        data.ordersNo = Math.floor(Math.random() * (10 , 2000) + 30)
        console.log('Order Data', data)
        orderCreate(data, e, navigate)
        deleteCart()
        navigate('/dashboard/all-order')
    };
    if(carts.length <= 0){
        return (
            <Grid item xs={12} sm={9} md={9}>
                <Paper elevation={3} sx={{p: 5}}>
                    Please add products <Link to='/dashboard/cart'>from here</Link>
                </Paper>
            </Grid>
        )
    }else{
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
                        </Grid>
                        <Button variant="contained" type="submit">Order Confirm</Button>
                    </form>
                </Paper>
            </Grid>
        );
    }
};
export default AddOrder;