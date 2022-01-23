import React, {useState} from 'react';
import {Paper,Box, Grid, FormControl, TextField, Button} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";

const AddBrand = () => {
    const [brandName, setBrandName] = useState('')
    const {brandCreate} = UseAPI()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data ={
            brandName: brandName
        }
        brandCreate(data,e)
    }
    return (
        <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3} sx={{display: 'flex', p: 4, alignItems: 'center', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <FormControl>
                            <TextField
                                label="Brand Name"
                                sx={{width: '100%', mb: 3}}
                                variant="standard"
                                type="text"
                                required={true}
                                onChange={(e)=>setBrandName(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                    <Button variant="contained" type="submit">Add Brand</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AddBrand;