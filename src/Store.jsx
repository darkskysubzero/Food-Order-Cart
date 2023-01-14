import React from "react";

const Store = React.createContext({
    hello: ""
})



export const StoreProvider = (props) => {

    return <Store.Provider value={{
        hello: "hello"
    }}>
        {props.children}
    </Store.Provider>

}




export default Store;




