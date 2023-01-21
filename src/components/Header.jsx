import React, { useContext, useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faC, faX } from "@fortawesome/free-solid-svg-icons";
import Store from "../Store";

const Header = (props) => {

    const context = useContext(Store);

    const [itemCount, setItemCount] = useState(1);

    const getCartCount = () => {
        const count = context.cart.reduce((total, next) => total + next.itemQuantity, 0);
        setItemCount(count);
    }


    useEffect(() => {
        getCartCount();
    }, [context.cart]);

    return (
        <Wrapper>
            <nav className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Docs</li>
                    <h1>Noodles</h1>
                    <li>Login</li>
                    <li>Search</li>
                    <li className="cartBtn">
                        <button>Cart</button>
                        <span>{itemCount}</span>
                    </li>
                    <li className="hamburger">
                        <FontAwesomeIcon icon={faBars} />
                        {/* <FontAwesomeIcon icon={faX} /> */}
                    </li>
                </ul>
            </nav>




        </Wrapper>
    )
}
export default Header;