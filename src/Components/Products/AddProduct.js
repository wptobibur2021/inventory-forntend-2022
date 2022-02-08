import React, {useEffect, useState} from 'react';
import {Paper, Grid, Box,TextField,Button,MenuItem,Input } from "@mui/material";
import { useForm } from 'react-hook-form';
import {Cancel} from "@mui/icons-material";
import UseAPI from "../../Hooks/UseAPI";
import axios from "axios";
const AddProduct = () => {
    const {productCreate} = UseAPI()
    const [file, setFile] = useState(null)
    const { register, handleSubmit} = useForm();
    const {categoryGet, brandGet} = UseAPI()
    const [cats, setCats] = useState([])
    const [brand, setBrand] = useState([])

    // Get Brand From Database
    useEffect(()=>{
        categoryGet(setCats)
    },[])

    // Get Brand From Database
    useEffect(()=>{
        brandGet(setBrand)
    },[])
    console.log('Brand: ', brand)
    const onSubmit = (data, e) =>{
        if(file){
            const fileData =  new FormData();
            const fileName = Date.now() + file.name
            fileData.append('name', fileName)
            fileData.append('file', file);
            data.img = fileName
            try{
                axios.post('http://localhost:5080/api/upload', fileData)
            }catch (e) {
                console.log(e.message)
            }
        }
        productCreate(data, e)
    };


    return (
        <Grid item xs={12} sm={8} md={8}>
            <Paper elevation={3} sx={{p: 5}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Product Name"
                                    type="text"
                                    sx={{width: '100%'}}
                                    {...register('productName')}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Product Number"
                                    type="text"
                                    {...register('productSerialNo')}
                                    sx={{width: '100%'}}
                                    required={true}
                                />
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Category"
                                    select
                                    sx={{width: '100%'}}
                                    {...register('categoryName')}
                                    required={true}
                                >
                                    {cats.map((option) => (
                                        <MenuItem key={option._id} value={option.categoryName}>
                                            {option.categoryName}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Grid>
                        <Grid item sm={6} md={6} xs={12}>
                            <Box sx={{mb: 2}}>
                                <TextField
                                    label="Brand"
                                    select
                                    sx={{width: '100%'}}
                                    {...register('brandName')}
                                    required={true}
                                >
                                    {brand.map((option) => (
                                        <MenuItem key={option._id} value={option.brandName}>
                                            {option.brandName}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Grid>

                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box sx={{mb: 2}}>*/}
                        {/*        <TextField*/}
                        {/*            label="Product Quantity"*/}
                        {/*            {...register('productQty')}*/}
                        {/*            type="number"*/}
                        {/*            sx={{width: '100%'}}*/}
                        {/*            required={true}*/}
                        {/*        />*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box sx={{mb: 2}}>*/}
                        {/*        <TextField*/}
                        {/*            type="Date"*/}
                        {/*            {...register('buyDate')}*/}
                        {/*            sx={{width: '100%'}}*/}
                        {/*            required={true}*/}
                        {/*        />*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box>*/}
                        {/*        <TextField*/}
                        {/*            sx={{width: '100%', mb: 2}}*/}
                        {/*            type="number"*/}
                        {/*            {...register('buyPrice')}*/}
                        {/*            label="Buying Price"*/}
                        {/*        >*/}
                        {/*        </TextField>*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        {/*<Grid item sm={4} md={4} xs={12}>*/}
                        {/*    <Box>*/}
                        {/*        <TextField*/}
                        {/*            sx={{width: '100%', mb: 2}}*/}
                        {/*            type="number"*/}
                        {/*            label="Selling Price"*/}
                        {/*            {...register('sellingPrice')}*/}
                        {/*        >*/}
                        {/*        </TextField>*/}
                        {/*    </Box>*/}
                        {/*</Grid>*/}
                        <Grid item sm={6} md={6}>
                            <Box sx={{mb: 2}}>
                                {file && (
                                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', mb: 3}}>
                                        <img style={{width: '100%', objectFit: 'cover'}} src={URL.createObjectURL(file)} alt="" />
                                        <Cancel sx={{position: 'absolute', top: '5px',  right: '3px', left: '320px', cursor: 'pointer'}} onClick={() => setFile(null)} />
                                    </Box>
                                )}
                                <label htmlFor="contained-button-file">
                                    <Input sx={{display: 'none'}} accept=".jpg, .png, .jpeg" id="contained-button-file" onChange={(e)=>setFile(e.target.files[0])} type="file" />
                                    <Button variant="contained" component="span">
                                        Upload
                                    </Button>
                                </label>
                            </Box>
                        </Grid>
                    </Grid>
                    <Button variant="contained" type="submit">Add Product</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AddProduct;