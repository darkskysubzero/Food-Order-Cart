import React, { useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {

    /*

            itemID: crypto.randomUUID(),
            itemImage: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg",
            itemName: "Chicken Curry",
            itemSize: "4 People",
            itemPrice: 120,
            itemQuantity: 1

    */

    const { food } = props;

    const [item, setItem] = useState(food);


    //=======================MANAGE QUANTITY=================================
    const setQuantity = (e) => {
        setItem(prev => ({
            ...prev,
            itemQuantity: Number(e.target.value)
        }))
    }

    const increaseQuantity = () => {


        setItem(prev => (
            {
                ...prev,
                itemQuantity: prev.itemQuantity + 1

            }

        ))

    }

    const decreaseQuantity = () => {
        let newQuantity = item.itemQuantity;
        if (newQuantity === 1) {
            newQuantity = 1;
        } else {
            newQuantity--;
        }

        setItem(prev => (
            {
                ...prev,
                itemQuantity: newQuantity

            }

        ))
    }

    //=======================================================================






    //======================ADDING ITEM=====================================
    const addItem = () => {
        console.log(item);
    }


    return (
        <Wrapper>
            <div className="item">
                <div className="product-info">
                    <div className="product-image"><img src={item.itemImage} /></div>
                    <div className="product-details"><span>{item.itemName}</span><span>{item.itemSize}</span></div>
                </div>
                <div className="product-price">R {item.itemPrice}</div>
                <div className="product-add">

                    <div className="quantity">
                        <button onClick={decreaseQuantity}><span><FontAwesomeIcon icon={faMinus} /></span></button>
                        <input type="number" placeholder="1" value={item.itemQuantity} onChange={setQuantity} min="1" max="100" />
                        <button onClick={increaseQuantity}><span><FontAwesomeIcon icon={faPlus} /></span></button>
                    </div>
                    <div className="add">
                        <button onClick={addItem}>
                            <span>Add</span>
                            <span><FontAwesomeIcon icon={faBowlFood} /></span>
                        </button>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}

export default Item;