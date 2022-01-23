import React, {useState} from 'react';
import {Paper,Box, Grid, FormControl, TextField, Button} from "@mui/material";
import UseAPI from "../../Hooks/UseAPI";

const AddCategory = () => {
    const [catName, setCatName] = useState('')
    const {categoryCreate} = UseAPI()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const data ={
            categoryName: catName
        }
        categoryCreate(data,e)
    }
    return (
        <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3} sx={{display: 'flex', p: 4, alignItems: 'center', justifyContent: 'center'}}>
                <form onSubmit={handleSubmit}>
                    <Box>
                        <FormControl>
                            <TextField
                                label="Category Name"
                                sx={{width: '100%', mb: 3}}
                                variant="standard"
                                type="text"
                                required={true}
                                onChange={(e)=>setCatName(e.target.value)}
                            />
                        </FormControl>
                    </Box>
                    <Button variant="contained" type="submit">Add Category</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AddCategory;