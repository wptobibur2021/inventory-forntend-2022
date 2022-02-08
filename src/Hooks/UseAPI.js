import axios from "axios";
import useNotification from "./useNotification";

const UseAPI = () =>{
    // https://shielded-retreat-11538.herokuapp.com/
    const url = "https://shielded-retreat-11538.herokuapp.com/api/"
    const {successNotify, errorNotify} = useNotification()
    /*
    * ===============
    *   PRODUCT API DECLARATION
    * ===============
    * */
    // Add Product
    const productCreate = (data, e) =>{
        axios.post(url +"products/create", data).then(res=>{
            if(res.data){
                successNotify("Product Add Successfully")
                e.target.reset()
            }
        })
    }
    // Delete Product
    const productDelete = (id, setProducts, products) =>{
        axios.delete(url + `products/delete/${id}`).then(res=>{
            if(res.data){
                const update = products.filter((product) => product._id !== id)
                setProducts(update)
                successNotify("Product Delete Successfully")
            }
        })
    }
    // Get All Product
    const productGet = (setProducts) =>{
        axios.get(url + "products/all").then(res=>{
            setProducts(res.data)
        })
    }
    /*
    * ===============
    *   CATEGORY API DECLARATION
    * ===============
    * */

    //Add Category
    const categoryCreate = (data, e) =>{
        try{
            axios.post(url + "category/create", data).then(res=>{
                if(res.data){
                    successNotify("Category Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    // Get Category
    const categoryGet = (categoryGet) =>{
        try{
            axios.get(url + 'category/all').then(res=>{
                if(res.data){
                    categoryGet(res.data)
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    // Delete Category
    const categoryDelete = (id, setCategory, category) =>{
        try {
            axios.delete(url + 'category/delete/' +id).then(res=>{
                if(res.data){
                    const update = category.filter((cat)=>cat._id !== id)
                    setCategory(update)
                    successNotify("Category Delete Successfully")
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    /*
    * ===============
    *   BRAND API DECLARATION
    * ===============
    */

    //Add Brand
    const brandCreate = (data, e) =>{
        try{
            axios.post(url + "brand/create", data).then(res=>{
                if(res.data){
                    successNotify("Brand Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    // Get Brand
    const brandGet = (setBrand) =>{
        try{
            axios.get(url + 'brand/all').then(res=>{
                if(res.data){
                    setBrand(res.data)
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    // Delete Brand
    const brandDelete = (id, setBrand, brand) =>{
        try {
            axios.delete(url + 'brand/delete/' + id).then(res=>{
                if(res.data){
                    const update = brand.filter((cat)=>cat._id !== id)
                    setBrand(update)
                    successNotify("Brand Delete Successfully")
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    /*
    * ===============
    *   CART API DECLARATION
    * ===============
    */
    // Cart Create
    const cartCreate = (data,e) =>{
        try{
            axios.post(url + 'cart/create', data).then(res=>{
                if(res.data){
                    successNotify("Cart Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    // Get Cart
    const cartGet = (setCarts) =>{
        try{
            axios.get(url + 'cart/all').then(res=>{
                console.log('Get Cart: ', res.data)
                setCarts(res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    // Delete
    const deleteCart = ()=>{
        try{
            axios.delete(url + 'cart/delete').then(res=>{
                console.log('Delete Cart: ', res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    /*
    * ===============
    *   EMPLOYEE API DECLARATION
    * ===============
    */

    const employeeCreate = (data,e) =>{
        try{
            axios.post(url + 'employee/create', data).then(res=>{
                if(res.data){
                    successNotify("Employee Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    // Get Employee
    const employeeGet = (setEmployee) =>{
        try{
            axios.get(url + 'employee/all').then(res=>{
                setEmployee(res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }


    /*
    * ===============
    *   CUSTOMER API DECLARATION
    * ===============
    */

    const customerCreate = (data,e) =>{
        try{
            axios.post(url + 'customer/create', data).then(res=>{
                if(res.data){
                    successNotify("Customer Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    // Get Employee
    const customerGet = (setCustomer) =>{
        try{
            axios.get(url + 'customer/all').then(res=>{
                setCustomer(res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }
    /*
    * ===============
    *   STOCK API DECLARATION
    * ===============
    */

    const stockCreate = (data,e) =>{
        try{
            axios.post(url + 'stock/create', data).then(res=>{
                if(res.data){
                    successNotify("Stock Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    // Get Stock Item
    const stockGet = (setStocks, brandId)=>{
        try{
            console.log('BrandId: ', brandId)
            let queryUrl
            if(brandId !== 0){
                queryUrl = url+ `stock/all?brandId=${brandId}`
                console.log('Query: ', queryUrl)
            }else {
                queryUrl = url+ `stock/all`
                console.log('Query: ', queryUrl)
            }
            axios.get(queryUrl).then(res=>{
                setStocks(res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }


    // Stock Update By Item
    const stockUpdate = (id, data) =>{
        try{
            axios.put(url+ 'stock/update/' + id, data).then(res=>{
                if(res.data){
                    successNotify("Cart Add Successfully")
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    const returnStockUpdate = (id, data) =>{
        try{
            axios.put(url+ 'stock/return/update/' + id, data).then(res=>{
                console.log(res.data)
            })
        }catch (e){
            errorNotify(e.response.message)
        }
    }

    const deleteStock = (id)=>{
        try{
            axios.delete(url+ 'stock/delete/' + id).then(res=>{
                console.log(res.data)
            })
        }catch (e){
            errorNotify(e.response.message)
        }
    }

    /*
    * ===============
    *   ORDER API DECLARATION
    * ===============
    */

    const orderCreate = (data,e)=>{
        try{
            axios.post(url + 'order/create', data).then(res=>{
                if(res.data){
                    successNotify("Order Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    const orderGet = (setOrders, employeeId) =>{
        try{
            let queryUrl
            if(employeeId !== 0){
                queryUrl = url+ `order/all?employeeId=${employeeId}`
                console.log('Query: ', queryUrl)
            }else {
                queryUrl = url+ `order/all`
                console.log('Query: ', queryUrl)
            }
            axios.get(queryUrl).then(res=>{
                setOrders(res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    const singleOrder = (setOrder,id)=>{
        try{
            axios.get(url + 'order/single/' +id).then(res=>{
                setOrder(res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    const updateOrder = (id, data) =>{
        try{
            axios.put(url + 'order/update/' +id, data).then(res=>{
                console.log('Data : ', res.data)
            })
        }catch(e){
            errorNotify(e.response.message)
        }
    }

    const monthlyIncome = ()=>{
        try{
            axios.get(url + 'order/income').then(res=>{
                console.log('Data : ', res.data)
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    const salesReport = (setSales,employeeId,pageNo,setTotalPageNo)=>{
        try{
            let queryUrl
            if(employeeId !== 0){
                queryUrl = url+`order/sales?employeeId=${employeeId}&&page=${pageNo}`
                console.log('Query: ', queryUrl)
            }else {
                queryUrl = url+`order/sales?page=${pageNo}`
                console.log('Query: ', queryUrl)
            }
            axios.get(queryUrl).then(res=>{
                setSales(res.data.result)
                setTotalPageNo(res.data.totalPage)
            })
        }catch (e) {

        }
    }

    /*
    * ===============
    *   DAMAGE API DECLARATION
    * ===============
    */

    const damageCreate = (data,e)=>{
        try{
            axios.post(url + 'damage/create', data).then(res=>{
                if(res.data){
                    successNotify("Damage Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    const damageGet = (setDamage)=>{
        axios.get(url+'damage/all').then(res=>{
            if(res.data){
                setDamage(res.data)
            }
        })
    }

    /*
    * ===============
    *   DAMAGE API DECLARATION
    * ===============
    */

    const returnCreate = (data,e)=>{
        try{
            axios.post(url + 'return/create', data).then(res=>{
                if(res.data){
                    successNotify("Return Add Successfully")
                    e.target.reset()
                }
            })
        }catch (e) {
            errorNotify(e.response.message)
        }
    }

    /*
    * ===============
    * Auth API DECLARATION
    * ===============
    */

    const userLogin = (data, dispatch, navigate) =>{
        dispatch({type: "LOGIN_START"})
        try{
            axios.post(url + 'user/login', data).then(res=>{
                if(res.data){
                    dispatch({type: "LOGIN_SUCCESS", payload: res.data})
                    navigate('/dashboard')
                    successNotify('User login has been successfully')
                }
            })
        }catch(e){
            errorNotify(e.response.message)
        }
    }

    const userLogOut = (navigate) =>{
        localStorage.removeItem("user");
        navigate('/')
        successNotify('User Logout Successfully')
    }


    /*
    * ===============
    * COST API DECLARATION
    * ===============
    */

    const costCreate = (data,e) =>{
        axios.post(url+`cost/create`, data).then(res=>{
            if(res.data){
                successNotify('Cost Add Successfully')
                e.target.reset()
            }
        })
    }

    const costGet = (setCost, pageNo, setTotalPage) =>{
        axios.get(url + `cost/all?page=${pageNo}`).then(res=>{
            if(res.data){
                setCost(res.data.result)
                setTotalPage(res.data.totalPage)
            }
        })
    }



    return{costGet,costCreate,damageGet,userLogOut,userLogin,salesReport,monthlyIncome,brandDelete,deleteStock,returnStockUpdate,updateOrder,damageCreate,returnCreate,stockUpdate,deleteCart,singleOrder,orderGet,orderCreate,employeeGet,customerGet,stockGet,stockCreate,brandGet,customerCreate,employeeCreate,cartGet,cartCreate,categoryDelete,categoryGet,productCreate, categoryCreate, brandCreate, productGet, productDelete}
}
export default UseAPI