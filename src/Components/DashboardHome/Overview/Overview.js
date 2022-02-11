import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, Grid, Typography} from "@mui/material";
import UseAPI from "../../../Hooks/UseAPI";

const Overview = () => {
    const {totalSales,damageGet,costReport} = UseAPI()
    /* Sales Report */
    const[sales,setSales] = useState([])
    useEffect(()=>{
        totalSales(setSales)
    },[])
    let salesTotal = 0
    sales.map((sale)=>(
        salesTotal += sale.totalPrice
    ))
    /* Damage Report */
    const [damage, setDamage] = useState([])
    useEffect(()=>{
        damageGet(setDamage)
    },[])
    let damageTotal = 0
    damage.map((damage)=>(
        damageTotal += damage.totalPrice
    ))
    /* Const */
    const [costs, setCosts] = useState([])
    useEffect(()=>{
        costReport(setCosts)
    },[])
    let costTotal = 0
    costs.map((cost)=>(
        costTotal += cost.costTaka
    ))
    console.log('Cost: ', costs)
    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item sm={3} md={3} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Total Sales
                            </Typography>
                            <Typography variant="h6">
                                {salesTotal} Tk
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} md={3} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Total Damage
                            </Typography>
                            <Typography variant="h6">
                                {damageTotal} Tk
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3} md={3} xs={12}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Total Cost
                            </Typography>
                            <Typography variant="h6">
                                {costTotal} Tk
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Overview;