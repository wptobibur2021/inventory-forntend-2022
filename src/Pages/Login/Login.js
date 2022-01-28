import React, {useContext} from 'react';
import {Grid, Box, Typography,Paper, FormControl, TextField, Button, CircularProgress} from '@mui/material'
import {useForm} from "react-hook-form";
import UseAPI from "../../Hooks/UseAPI";
import {AuthContext} from "../../Context/AuthContext";
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const {userLogin} = UseAPI()
    const navigate = useNavigate()
    const {isFetching, dispatch} = useContext(AuthContext)
    const {register, handleSubmit} = useForm();
    const onSubmit = (data,e) =>{
        userLogin(data, dispatch, navigate)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{p:15, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Grid item xs={2} sm={4} md={4}>
                    <Paper elevation={3} sx={{p:5}}>
                        <Typography variant="h4" sx={{alignItems: 'center', mb: 3}}>Admin Login</Typography>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl fullWidth variant="standard">
                                <TextField
                                    id="email"
                                    label="Email"
                                    variant="standard"
                                    type="email"
                                    {...register('email')}
                                    required={true}
                                    sx={{mb: 3}}
                                />
                            </FormControl>
                            <FormControl fullWidth variant="standard">
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="standard"
                                    type="password"
                                    minLength="8"
                                    {...register('password')}
                                    required={true}
                                    sx={{mb: 3}}
                                />
                            </FormControl>
                            <Button fullWidth className="loginBtn" type="submit" variant="contained">{isFetching ? <CircularProgress size="25px" sx={{color: "white"}}/> : "Login"}</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Login;