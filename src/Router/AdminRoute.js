import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";
import {useLocation, Navigate} from "react-router-dom";
import {Box, CircularProgress} from "@mui/material";

const AdminRoute = ({children, ...rest}) => {
    const {user, isFetching} = useContext(AuthContext)
    let location = useLocation();
    if(isFetching){
        return (
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CircularProgress/>
            </Box>
        );
    }
    if(user?.email && user.userRole === 1){
        return children
    }else {
        return <Navigate to="/" state={{from: location}}/>
    }
};
export default AdminRoute;