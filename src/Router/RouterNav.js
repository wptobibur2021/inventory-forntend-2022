import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddCategory from "../Components/Category/AddCategory";
import AddProduct from "../Components/Products/AddProduct";
import AddBrand from "../Components/Brand/AddBrand";
import ListProduct from "../Components/Products/ListProduct";
import ListCategory from "../Components/Category/ListCategory";
import Cart from "../Components/Cart/Cart";
import AddEmployee from "../Components/Employee/AddEmployee";
import AddCustomer from "../Components/Customer/AddCustomer";
import AddStock from "../Components/Stock/AddStock";
import AddOrder from "../Components/Order/AddOrder";
import AllOrders from "../Components/Order/AllOrders";
import SingleOrder from "../Components/Order/SingleOrder";
import UpdateOrder from "../Components/Order/UpdateOrder";
import ListBrand from "../Components/Brand/ListBrand";
import Income from "../Components/Income/Income";
import Sales from "../Components/Sales/Sales";
import ListStock from "../Components/Stock/ListStock";
import Login from "../Pages/Login/Login";
import AdminRoute from "./AdminRoute";
import Damage from "../Components/Damage/Damage";
import Cost from "../Components/Cost/Cost";
import CostList from "../Components/Cost/CostList";
import Home from "../Components/DashboardHome/Home";
const RouterNav = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path='/Dashboard' element={<AdminRoute><Dashboard/></AdminRoute>} >
                    <Route path="/Dashboard/home" element={<Home/>} />
                    {/* Product Route */}
                    <Route path="/Dashboard/add-product" element={<AddProduct />} />
                    <Route path="/Dashboard/list-product" element={< ListProduct/>} />
                    {/* Stock Product */}
                    <Route path="/Dashboard/list-stock" element={<ListStock/>} />
                    {/*Category Route*/}
                    <Route path="/Dashboard/add-category" element={<AddCategory />} />
                    <Route path="/Dashboard/list-category" element={<ListCategory />} />
                    {/* Brand */}
                    <Route path="/Dashboard/add-brand" element={<AddBrand />} />
                    <Route path="/Dashboard/list-brand" element={<ListBrand/>} />
                    {/* Employee */}
                    <Route path="/Dashboard/add-employee" element={<AddEmployee/>} />

                    <Route path="/Dashboard/add-customer" element={<AddCustomer/>} />
                    <Route path="/Dashboard/add-stock" element={<AddStock/>} />
                    <Route path="/Dashboard/add-order" element={<AddOrder/>} />
                    <Route path="/Dashboard/all-order" element={<AllOrders/>} />
                    <Route path="/Dashboard/order/:id" element={<SingleOrder/>} />
                    <Route path="/Dashboard/update-order/:id" element={<UpdateOrder/>} />
                    {/* Income or Income Menu */}
                    <Route path="/Dashboard/income" element={<Income/>} />
                    <Route path="/Dashboard/sales" element={<Sales/>} />
                    <Route path="/Dashboard/cart" element={<Cart/>} />
                    /* Damage */
                    <Route path="/Dashboard/damage" element={<Damage/>} />
                    /* Cost */
                    <Route path="/Dashboard/cost" element={<Cost/>}></Route>
                    <Route path="/Dashboard/list-cost" element={<CostList/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouterNav;