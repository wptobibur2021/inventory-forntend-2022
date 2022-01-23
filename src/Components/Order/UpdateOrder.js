import React, {useEffect, useState} from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { jsPDF } from "jspdf";
import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box, Divider
} from "@mui/material";
import {useParams} from "react-router-dom";
import UseAPI from "../../Hooks/UseAPI";
import SingleUpdate from "./SingleUpdate";

const UpdateOrder = () => {
    const [order, setOrder] = useState([])
    const {id} = useParams()
    const {singleOrder} = UseAPI()
    console.log('Id', id)
    const {customerId, employeeId, totalPrice, carts, ordersNo} = order
    useEffect(()=>{
        singleOrder(setOrder,id)
    },[])

    return (
        <Grid item xs={12} sm={8} md={8}>
            <Box sx={{p:3}}>
                <Grid container sx={{mb:6}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h6">Customer Info</Typography>
                        <Box>
                            <Typography variant="p">Name: {customerId?.name}.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="p">Mobile No: {customerId?.mobileNo}.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="p">Address: {customerId?.shopName},{customerId?.address}.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h6">Employee Info</Typography>
                        <Box>
                            <Typography variant="p">Name: {employeeId?.name}.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="p">Mobile No: {employeeId?.mobileNo}.</Typography>
                        </Box>
                        <Box>
                            <Typography variant="p">Address: {employeeId?.address}.</Typography>
                        </Box>
                    </Grid>
                    <Box sx={{display: 'flex', alignItems: 'center', mt: 5, justifyContent: 'center'}}>
                        <Typography variant="h4">Order No: {ordersNo}</Typography>
                    </Box>
                    <Divider />
                </Grid>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Product Name</TableCell>
                                <TableCell align="right">Sales Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Subtotal</TableCell>
                                <TableCell align="right">Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                carts?.map((cart)=><SingleUpdate cart={cart} order={order} orderId={id}></SingleUpdate>)
                            }
                        </TableBody>
                    </Table>
                    <Divider />
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems:"flex-end"}}>
                        <Typography variant="p">Total: {totalPrice} Taka</Typography>
                    </Box>
                </TableContainer>
            </Box>
        </Grid>
    );
};

export default UpdateOrder;