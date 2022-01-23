import React,{useEffect, useState} from 'react';
import UseAPI from "../../Hooks/UseAPI";

const Income = () => {
    const {monthlyIncome} = UseAPI()
    useEffect(()=>{
        monthlyIncome()
    },[])
    return (
        <div>
            <h1>Welcome to Sales Module</h1>
        </div>
    );
};
export default Income;