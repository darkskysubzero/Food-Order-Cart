import React from "react";
import Item from "./Item";
import Wrapper from "./Wrapper";

const Items = (props) => {

    // Item Data----
    const data = [
        {
            itemID: crypto.randomUUID(),
            itemImage: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg",
            itemName: "Chicken Curry",
            itemSize: "4 People",
            itemPrice: 120,
            itemQuantity: 1
        },
    ]

    return (
        <Wrapper>
            <section className="items">
                <h1>Items Available</h1>
                <div className="labels">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                </div>

                {data.map(eachItem => {
                    return <Item
                        key={eachItem.itemID}
                        food={eachItem}
                    />
                })}

            </section>
        </Wrapper>
    )
}
export default Items;