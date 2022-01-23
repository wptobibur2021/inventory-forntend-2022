import React, {useState} from 'react';
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
const DamageModal = ({open, handleClose, data}) => {
    const [qty, setQty] = useState('1')
    const [comment, setComment] = useState('')
    const{damageCreate, stockUpdate} = UseAPI()
    const navigate = useNavigate()
    const bookHandle = e =>{
        const stockId = data._id
        e.preventDefault()
        const dataInfo = {
            productId: data.productId._id,
            quantity: data.productQty-qty,
            price: qty*data.salesPrice,
            comment: comment
        }
        const updateQty = {
            productQty: data.productQty-qty
        }
        stockUpdate(stockId,updateQty)
        damageCreate(dataInfo,e)
        navigate('/dashboard')
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
                        defaultValue={data.productQty}
                        type="text"
                        label="Stock Qty"
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        defaultValue="1"
                        type="number"
                        label="Quantity"
                        onChange={(e)=>setQty(e.target.value)}
                        required
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <TextField
                        type="text"
                        label="Comment"
                        onChange={(e)=>setComment(e.target.value)}
                        size="small"
                        sx={{width: '100%', mb:2}}
                    />
                    <Typography sx={{mb:3}} variant="h6" component="h2">
                        Total Price: {qty*data.salesPrice} Tk
                    </Typography>
                    <Button type="submit" variant="contained">Damage</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default DamageModal;