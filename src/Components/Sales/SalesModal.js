import React from 'react';
import {
    Modal,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Box, Divider, Typography
} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};
const SalesModal = ({handleClose,open, data, orderId, orderItems}) => {
    //console.log('Data Modal: ', data);
    //console.log('Order Id:', orderId)
    const viewData = orderItems?.find(data =>data._id === orderId )
    //const carts = viewData.carts
    //console.log('View Data: ', viewData)
    //console.log('Cart: ', carts)
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Product Name</TableCell>
                                    <TableCell align="center">Sales Price</TableCell>
                                    <TableCell align="center">Sales</TableCell>
                                    <TableCell align="center">Damage</TableCell>
                                    <TableCell align="center">Return</TableCell>
                                    <TableCell align="center">Total Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    viewData?.carts?.map((cart)=>(
                                        <TableRow
                                            key={cart._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center" component="th" scope="row">
                                                {cart.productId.productName}
                                            </TableCell>
                                            <TableCell align="center" component="th" scope="row">{cart.salesPrice} Tk</TableCell>
                                            <TableCell align="center" component="th" scope="row">
                                                {cart.salesPro}
                                            </TableCell>
                                            <TableCell align="center">{cart.damagePro}</TableCell>
                                            <TableCell align="center">{cart.returnPro}</TableCell>
                                            <TableCell align="center">{cart.totalPrice} Tk</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                        <Divider />
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems:"flex-end"}}>
                            <Typography variant="p">Total: {viewData?.totalPrice} Taka</Typography>
                        </Box>
                    </TableContainer>
            </Box>
        </Modal>
    );
};

export default SalesModal;