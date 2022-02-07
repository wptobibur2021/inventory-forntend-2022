import React, {useEffect, useState} from 'react';
import {
    CircularProgress,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";
const Damage = () => {
    const {damageGet} = UseAPI()
    const [damage,setDamage] = useState([])
    useEffect(()=>{
        damageGet(setDamage)
    },[])
    console.log('Damage: ', damage)
    if(damage.length > 0){
        return (
            <Grid sm={8} item md={8} xs={12}>
                <Paper elevation={3} sx={{p: 3}}>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Total Price</TableCell>
                                    <TableCell>Comments</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    damage.map((damage)=>(
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {damage?.productId?.productName}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {damage?.quantity}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {damage?.salesPrice}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {damage?.price} Tk
                                            </TableCell>
                                            <TableCell>
                                                {damage?.comment ? damage.comment : 'No Comment' }
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
    }else{
        return (
            <Grid sx={{display: 'flex', justifyContent: 'center',  mt: 5}} item xs={12} sm={8} md={8}>
                <CircularProgress />
            </Grid>
        )
    }

};

export default Damage;