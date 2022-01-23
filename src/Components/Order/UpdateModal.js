import React, {useEffect, useState} from 'react';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";
import {useNavigate} from "react-router-dom";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};
const UpdateModal = ({open, handleClose, data, orderId, order}) => {
    const [returnQty, setReturnQty] = useState('1')
    const [damageQty, setDamageQty] = useState('1')
    const [returnComment, setReturnComment] = useState('')
    const [damageComment, setDamageComment] = useState('')
    console.log('Data: ', data)
    console.log('Order: ', order)
    const{damageCreate, returnStockUpdate, returnCreate, updateOrder} = UseAPI()
    const navigate = useNavigate()
    const productId = data.productId._id
    console.log('Product Id: ', productId)
    let price = 0
    const filterData = order?.carts?.filter((cart) => cart.productId._id !== productId)
    console.log('Filter: ', filterData)
    filterData?.map((cart)=>{
        price+=cart.totalPrice
    })
   console.log('Demo Price: ', price)

    const bookHandle = e =>{
        const productId = data.productId._id
        e.preventDefault()
        const damageInfo = {
            productId: data.productId._id,
            quantity: damageQty,
            price: damageQty*data.salesPrice,
            comment: damageComment
        }
        const returnInfo = {
            productId: data.productId._id,
            quantity: returnQty,
            price: returnQty*data.salesPrice,
            comment: returnComment
        }
        const updateQty = {
            productQty: returnQty
        }
        const salesPro = data.qty - (parseInt(damageQty)+ parseInt(returnQty))
        const cartPrice = salesPro * data.salesPrice
        const totalPrice = price + cartPrice

        const dataProductId = {
            cartId: data._id,
            damagePro: damageQty,
            returnPro: returnQty,
            salesPro: salesPro,
            cartPrice: cartPrice,
            totalPrice: totalPrice
        }
        returnStockUpdate(productId,updateQty)
        damageCreate(damageInfo,e)
        returnCreate(returnInfo,e)
        updateOrder(orderId, dataProductId)
        // navigate('/dashboard')
        handleClose()
    }
    return (
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                    {data.productId.productName}
                </Typography>
                <form onSubmit={bookHandle}>
                    <TextField
                        disabled
                        defaultValue={data.productId.productName}
                        id="outlined-size-small"
                        type="text"
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        defaultValue={data.salesPrice}
                        disabled
                        type="text"
                        label="Income Price"
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        disabled
                        defaultValue={data.qty}
                        type="text"
                        label="Order Qty"
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        defaultValue={data.damagePro}
                        type="number"
                        label="Damage Quantity"
                        onChange={(e)=>setDamageQty(e.target.value)}
                        required
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        type="text"
                        label="Damage Comment"
                        onChange={(e)=>setDamageComment(e.target.value)}
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />

                    <TextField
                        defaultValue={data.returnPro}
                        type="number"
                        label="Return Quantity"
                        onChange={(e)=>setReturnQty(e.target.value)}
                        required
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        type="text"
                        label="Return Comment"
                        onChange={(e)=>setReturnComment(e.target.value)}
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <Typography sx={{mb:3}} variant="h6" component="h2">
                        Total Price: {data.qty*data.salesPrice} Tk
                    </Typography>
                    <Button type="submit" variant="contained">Update</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default UpdateModal;