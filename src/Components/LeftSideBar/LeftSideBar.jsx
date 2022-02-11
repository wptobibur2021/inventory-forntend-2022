import React,{useState} from 'react';
import {Paper, Grid,Divider, Collapse, List, ListItemText, ListItemIcon, ListItemButton, ListItem} from "@mui/material";
import {PersonOutline,ExpandLess, ShoppingCart, ViewList, ExpandMore, Inventory2, Person, AddBox, Dashboard} from "@mui/icons-material"
import {Link} from "react-router-dom"
const LeftSideBar = () => {
    const [open, setOpen] = useState(false);
    const [catOpen, setCatOpen] = useState(false);
    const [brandtOpen, setBrandOpen] = useState(false);
    const [employeeOpen, setEmployeeOpen] = useState(false);
    const [stock, setStock] = useState(false);
    const [cost, setCost] = useState(false);

    const handleStock = () =>{
        setStock(!stock);
    }
    const handleCost = () =>{
        setCost(!cost);
    }
    const handleClick = () => {
       setOpen(!open);
    };
    const handleCat = ()=>{
        setCatOpen(!catOpen);
    }
    const handleBrand = () =>{
        setBrandOpen(!brandtOpen)
    }

    const handleEmployee = () =>{
        setEmployeeOpen(!employeeOpen)
    }

    return (
        <Grid item xs={12} sm={3} md={3}>
            <Paper elevation={3}>
                <List>
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/home">
                        <ListItemButton>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItemButton>
                    </Link>
                    <Divider />
                    <Divider />
                    {/*Category Menu*/}
                    <ListItemButton onClick={handleCat}>
                        <ListItemIcon>
                            <Inventory2 />
                        </ListItemIcon>
                        <ListItemText primary="Category" />
                        {catOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={catOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/add-category">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <AddBox />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Category" />
                                </ListItemButton>
                            </Link>
                            <Divider />
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/list-category">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ViewList />
                                    </ListItemIcon>
                                    <ListItemText primary="List Category" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <Divider />
                    {/* Brand Menu */}

                    <ListItemButton onClick={handleBrand}>
                        <ListItemIcon>
                            <Inventory2 />
                        </ListItemIcon>
                        <ListItemText primary="Brand" />
                        {brandtOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={brandtOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/add-brand">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <AddBox />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Brand" />
                                </ListItemButton>
                            </Link>
                            <Divider />
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/list-brand">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ViewList />
                                    </ListItemIcon>
                                    <ListItemText primary="List Brand" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <Divider />

                    {/* Employee Menu */}

                    <ListItemButton onClick={handleEmployee}>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary="Employee" />
                        {employeeOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={employeeOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/add-employee">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <AddBox />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Employee" />
                                </ListItemButton>
                            </Link>
                            <Divider />
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ViewList />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    {/* Product Menu */}
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <Inventory2 />
                        </ListItemIcon>
                        <ListItemText primary="Product" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/add-product">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <AddBox />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Product" />
                                </ListItemButton>
                            </Link>
                            <Divider />
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/list-product">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ViewList />
                                    </ListItemIcon>
                                    <ListItemText primary="List Product" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <Divider />
                    {/* Stock Menu */}
                    <ListItemButton onClick={handleStock}>
                        <ListItemIcon>
                            <Inventory2 />
                        </ListItemIcon>
                        <ListItemText primary="Stock Management" />
                        {stock ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={stock} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/add-stock">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <AddBox />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Stock" />
                                </ListItemButton>
                            </Link>
                            <Divider />
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/Dashboard/list-stock">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ViewList />
                                    </ListItemIcon>
                                    <ListItemText primary="Product Stock" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <Divider />
                    {/* Cost Menu */}
                    <ListItemButton onClick={handleCost}>
                        <ListItemIcon>
                            <Inventory2 />
                        </ListItemIcon>
                        <ListItemText primary="Cost Management" />
                        {cost ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={cost} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/Dashboard/cost">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <AddBox/>
                                    </ListItemIcon>
                                    <ListItemText primary="Add Cost" />
                                </ListItemButton>
                            </Link>
                            <Divider />
                            <Link style={{ textDecoration: 'none', color: '#000' }} to="/Dashboard/list-cost">
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <ViewList/>
                                    </ListItemIcon>
                                    <ListItemText primary="All Cost" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/cart">
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary="Cart" />
                        </ListItemButton>
                    </Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/add-order">
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary="Add Order" />
                        </ListItemButton>
                    </Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/all-order">
                        <ListItemButton>
                            <ListItemIcon>
                                <ShoppingCart />
                            </ListItemIcon>
                            <ListItemText primary="All Orders" />
                        </ListItemButton>
                    </Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/dashboard/add-customer">
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutline />
                            </ListItemIcon>
                            <ListItemText primary="Add Customer" />
                        </ListItemButton>
                    </Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/Dashboard/damage">
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutline />
                            </ListItemIcon>
                            <ListItemText primary="Damage"/>
                        </ListItemButton>
                    </Link>
                    <Divider />
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/Dashboard/sales">
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutline />
                            </ListItemIcon>
                            <ListItemText primary="Sales"/>
                        </ListItemButton>
                    </Link>
                </List>
            </Paper>
        </Grid>
    );
};

export default LeftSideBar;