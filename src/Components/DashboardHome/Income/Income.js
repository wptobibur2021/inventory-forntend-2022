import React, {useEffect,useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {Grid,Box,Paper} from "@mui/material";
import UseAPI from "../../../Hooks/UseAPI";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Monthly Report',
        },
    },
};
const Income = () => {
    const {monthlyIncome,monthlyCost,monthlyDamage} = UseAPI()
    const [incomes, setIncome] = useState([])
    const [costs, setCosts] = useState([])
    const [damages, setDamages] = useState([])
    useEffect(()=>{
        monthlyIncome(setIncome)
        monthlyCost(setCosts)
        monthlyDamage(setDamages)
    },[])
    const labels = []
    incomes.map((item)=>{
        labels.push(item.Name)
    })
    console.log('Cost State: ', costs)
    console.log('Income State: ', incomes)
    const data = {
        labels,
        datasets: [
            {
                label: 'Income',
                data: incomes?.map((item) => item.TotalSales),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Cost',
                data: costs?.map((item) => item.Total),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Damage',
                data: damages?.map((item) => item.total),
                backgroundColor: 'rgba(241, 196, 20, 0.5)',
            },

        ]

    };
    return (
        <Grid sm={8} item md={8} xs={12} sx={{mt: 3}}>
            <Paper elevation={3} sx={{p:3}}>
                <Box>
                    {
                        data ? <Bar options={options} data={data} /> : ''
                    }
                </Box>
            </Paper>
        </Grid>
    );
};

export default Income;