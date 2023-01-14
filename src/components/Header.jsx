import React from "react";
import Wrapper from "./Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faC, faX } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {



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
                        <span>3</span>
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