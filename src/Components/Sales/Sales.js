import React, {useEffect, useState} from 'react';
import UseAPI from "../../Hooks/UseAPI";
import {
    Box,
    Button,
    Grid, MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField,
    Typography
} from "@mui/material";
import {CreditScore, Visibility} from "@mui/icons-material";
import {DataGrid} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import SalesModal from "./SalesModal";
import UpdateModal from "../Order/UpdateModal";

const Sales = () => {
    const [sales, setSales] = useState([])
    const {salesReport,employeeGet} = UseAPI()
    const [orders, setOrders] = useState([])
    const [employee, setEmployee] = useState([])
    const [employeeId, setEmployeeId] = useState(0)
    // Get Employee From Database
    useEffect(()=>{
        employeeGet(setEmployee)
    },[])
    useEffect(()=>{
        salesReport(setSales, employeeId)
    },[employeeId])

    console.log('Sales Report: ', sales)
    const [open, setOpen] = useState(false);
    const [orderId, setOrderId] = useState('')
    const orderIdView = (orderId) => setOrderId(orderId)
    const salesOpen = () => setOpen(true)
    const salesClose = () => setOpen(false)

    return (
        <Grid sm={8} item md={8} xs={12}>
            <Paper elevation={3} sx={{p: 3}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item sm={6} md={6} xs={12}>
                        <Box sx={{mb: 2}}>
                            <TextField
                                label="Employee"
                                select
                                sx={{width: '100%'}}
                                value={employeeId}
                                onChange={(e)=>setEmployeeId(e.target.value)}
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
                            <Typography variant="h6" sx={{textAlign: 'center', mb: 4}}>Total Orders: {sales?.length}</Typography>
                        </Box>
                    </Grid>
                </Grid>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">OrderNo</TableCell>
                                <TableCell align="center">Customer Name</TableCell>
                                <TableCell align="right">Employee Name</TableCell>
                                <TableCell align="right">Total Price</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                sales?.map((cart)=>(
                                    <TableRow
                                        key={cart._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {cart.ordersNo}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {cart.customerId.name}
                                        </TableCell>
                                        <TableCell align="right">{cart.employeeId.name}</TableCell>
                                        <TableCell align="right">{cart.totalPrice} Tk</TableCell>
                                        <TableCell align="right">
                                            <Button onClick={() => { salesOpen(); orderIdView(cart._id);}}><Visibility/></Button>
                                        </TableCell>
                                        <SalesModal open={open} handleClose={salesClose} orderId={orderId} orderItems={sales}/>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Grid>
    );
};

export default Sales;