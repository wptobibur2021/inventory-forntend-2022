import React, {useState} from 'react';
import {Button, TableCell, TableRow} from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import CartModal from "./CartModal";

const SingleCart = ({cart}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <TableRow
                key={cart._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {cart?.productId?.productName}
                </TableCell>
                <TableCell align="right">{cart.salesPrice} TK</TableCell>
                <TableCell align="right">{cart.productQty}</TableCell>
                <TableCell align="center"><Button onClick={handleOpen}  variant="contained"><ShoppingCart/></Button></TableCell>
            </TableRow>
            <CartModal open={open} handleClose={handleClose} data={cart}></CartModal>
        </>
    );
};

export default SingleCart;