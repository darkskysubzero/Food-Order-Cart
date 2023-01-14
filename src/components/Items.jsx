import React from "react";
import Item from "./Item";
import Wrapper from "./Wrapper";

const Items = (props) => {



    return (
        <Wrapper>
            <section className="items">
                <h1>Items Available</h1>
                <div className="labels">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                </div>

                <Item />

            </section>
        </Wrapper>
    )
}
export default Items;