
// Add To key/ID 
const addToDB =(id) =>{
    //Check localstroge have a any product
    const exit = getDB()
    console.log('Get Item From LocalStorage: ', exit)

    //console.log('Key: ', id)
    //Check exit null/value Get Item LocalStorage
    let shopping_cart = {} 
    if(!exit){
        shopping_cart[id] = 1
    }else{
        shopping_cart = JSON.parse(exit)
        console.log('Key: ', id)
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount
        }else{
            shopping_cart[id] = 1
        }
    }
    updateDB(shopping_cart)
}




// Common Function Declaration
const getDB = () => localStorage.getItem('shopping_cart')
//Update Function Declaration
const updateDB = (cart) =>{
    localStorage.setItem('shopping_cart', JSON.stringify(cart))
}

// Delete From LocalStorage

const removeFromDB = (id) =>{
    const exit = getDB()
    if(!exit){
        return
    }else{
        const shopping_cart = JSON.parse(exit)
        delete shopping_cart[id]
        updateDB(shopping_cart)
    }
}

const getStoredCart = () =>{
    const exit = getDB();
    return exit ? JSON.parse(exit) : {}
}

const clearCart = () =>{
    localStorage.removeItem("shopping_cart")
}

export {addToDB, clearCart, getStoredCart, removeFromDB as deleteItem }