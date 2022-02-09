import React, {useEffect, useState} from 'react';
import {Grid, Paper, Table, TableBody,Pagination, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";
import Moment from 'react-moment';
const CostList = () => {
    const [costs, setCost] = useState([])
    const [pageNo, setPageNo] = useState(0)
    const [totalPage, setTotalPage] = useState(0)
    const {costGet} = UseAPI()
    useEffect(()=>{
        costGet(setCost, pageNo, setTotalPage)
    },[pageNo])

    const handleChange = (event, value) =>{
        setPageNo(value - 1);
    }
    console.log('Costs: ', costs, 'Total Page: ', totalPage)
    return (
        <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3} sx={{p: 5}}>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Taka</TableCell>
                                <TableCell>Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                costs?.map((cost)=>(
                                    <TableRow
                                        key={cost._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {cost?.costTitle}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {cost?.costTaka} Taka
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Moment format="LL">{cost?.costDate}</Moment>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination count={totalPage} color="primary" onChange={handleChange} />
            </Paper>
        </Grid>
    );
};

export default CostList;