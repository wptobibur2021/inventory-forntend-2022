import React, {useState} from 'react';
import {Button, TableCell, TableRow} from "@mui/material";
import {CreditScore} from "@mui/icons-material";
import UpdateModal from "./UpdateModal";

const SingleUpdate = ({cart, orderId, order}) => {
    const [damage, setDamage] = useState(false);
    const damageOpen = () => setDamage(true)
    const damageClose = () => setDamage(false)
    return (
        <>
            <TableRow
                key={cart._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {cart.productId.productName}
                </TableCell>
                <TableCell align="right">{cart.salesPrice} Tk</TableCell>
                <TableCell align="right">{cart.qty} Pes</TableCell>
                <TableCell align="right">{cart.totalPrice} Tk</TableCell>
                <TableCell align="center"><Button onClick={damageOpen}  variant="contained"><CreditScore/></Button></TableCell>
            </TableRow>
            <UpdateModal open={damage} handleClose={damageClose} order={order} orderId={orderId} data={cart}></UpdateModal>
        </>
    );
};

export default SingleUpdate;