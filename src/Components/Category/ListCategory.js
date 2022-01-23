import React, {useEffect, useState} from 'react';
import {DeleteOutline} from "@mui/icons-material";
import {Grid, Paper} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import UseAPI from "../../Hooks/UseAPI";

const ListCategory = () => {
    const [category, setCategory] = useState([])
    const {categoryGet, categoryDelete} = UseAPI()

    // Get Category from Database
    useEffect(()=>{
        categoryGet(setCategory)
    },[])
    const handleDelete = (id) =>{
        categoryDelete(id, setCategory, category)
    }
    const columns = [
        {   field: 'categoryName', headerName: 'Category Name', width: 200 },
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            sx={{cursor: 'pointer', mx: 2, color: 'red'}}
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <Grid sm={8} item md={8} xs={12}>
            <Paper elevation={3} sx={{p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ height: 400, width: '60%' }}>
                    <DataGrid
                        rows={category}
                        columns={columns}
                        pageSize={10}
                        getRowId={(row)=>row._id}
                        rowsPerPageOptions={[5]}
                    />
                </div>
            </Paper>
        </Grid>
    );
};

export default ListCategory;