import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Grid, MenuItem,
    Paper,
    Table, TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
    CircularProgress
} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";
import {Link} from "react-router-dom"
import {Visibility, CreditScore} from "@mui/icons-material";
const AllOrders = () => {
    const {orderGet, employeeGet} = UseAPI()
    const [orders, setOrders] = useState([])
    const [employee, setEmployee] = useState([])
    const [employeeId, setEmployeeId] = useState(0)
    // Get Employee From Database
    useEffect(()=>{
        employeeGet(setEmployee)
    },[])
    useEffect(()=>{
        orderGet(setOrders, employeeId)
    },[employeeId])

    if(orders.length === 0){
        return (
            <Grid sx={{display: 'flex', justifyContent: 'center',  mt: 5}} item xs={12} sm={8} md={8}>
                <CircularProgress />
            </Grid>
        )
    }else{
        return (
            <Grid item xs={12} sm={8} md={8}>
                <Paper elevation={3} sx={{p: 5}}>
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
                                <Typography variant="h6" sx={{textAlign: 'center', mb: 4}}>Total Orders: {orders?.length}</Typography>
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
                                    orders?.map((cart)=>(
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
                                                <Link to={`/dashboard/order/${cart._id}`}><Button><Visibility/></Button></Link>
                                                <Link to={`/Dashboard/update-order/${cart._id}`}><Button><CreditScore/></Button></Link>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>

                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        );
    }


};

export default AllOrders;