import React, { useState } from "react";

const Store = React.createContext({
    cart: [],
    setCart: () => { }
})



export const StoreProvider = (props) => {

    const [cartState, setCartState] = useState([]);

    return <Store.Provider value={{
        cart: cartState,
        setCart: setCartState
    }}>
        {props.children}
    </Store.Provider>

}




export default Store;




