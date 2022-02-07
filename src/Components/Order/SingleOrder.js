import React, {useEffect, useState} from 'react';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { jsPDF } from "jspdf";
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box, Divider
} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import UseAPI from "../../Hooks/UseAPI";

const SingleOrder = () => {
    const [order, setOrder] = useState([])
    const {id} = useParams()
    const {singleOrder} = UseAPI()
    console.log('Id', id)
    const {customerId, employeeId,carts,totalPrice, ordersNo} = order
    useEffect(()=>{
        singleOrder(setOrder,id)
    },[])
    console.log('Order: ', order)
    console.log('Order: ', customerId?.name)
    // let totalPrice = 0;
    // carts?.map((cart)=>{
    //     //cartId.push(cart.productId._id)
    //     // setProInfo({_id, ...cart})
    //     totalPrice+=cart.totalPrice
    // })
    const pdfDownload = () =>{
        htmlToImage.toPng(document.getElementById('printPage'), { quality: 1 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                const pdf = new jsPDF();
                const imgProps= pdf.getImageProperties(dataUrl);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                pdf.addImage(dataUrl, 'PNG', -3, 0,pdfWidth, pdfHeight);
                pdf.save("Techbd71.pdf");
            });
    }
    return (
        <Grid item xs={12} sm={8} md={8}>
            <Box id="printPage" sx={{p:3}}>
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
                    <Typography sx={{textAlign:'center', paddingLeft:'240px', mt:3, textDecoration: 'underline' }} variant="h6" component="div">
                        Order No: {ordersNo}
                    </Typography>
                    <Divider />
                </Grid>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Product Name</TableCell>
                                <TableCell align="right">Sales Price</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Sales</TableCell>
                                <TableCell align="right">Return</TableCell>
                                <TableCell align="right">Damage</TableCell>
                                <TableCell align="right">Subtotal</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                carts?.map((cart)=>(
                                    <TableRow
                                        key={cart._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {cart.productId.productName}
                                        </TableCell>
                                        <TableCell align="right">{cart.salesPrice} Tk</TableCell>
                                        <TableCell align="right">{cart.qty}</TableCell>
                                        <TableCell align="right">{cart.salesPro ? cart.salesPro : cart.qty}</TableCell>
                                        <TableCell align="right">{cart.returnPro === 0 ? '-----' : cart.returnPro }</TableCell>
                                        <TableCell align="right">{cart.damagePro === 0 ? '----' : cart.damagePro }</TableCell>
                                        <TableCell align="right">{cart.totalPrice}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                    <Divider />
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems:"flex-end"}}>
                        <Typography variant="p">Total: {totalPrice} Taka</Typography>
                    </Box>
                </TableContainer>
            </Box>
                <Button onClick={pdfDownload} variant="contained" type="submit">Download</Button>
        </Grid>
    );
};

export default SingleOrder;