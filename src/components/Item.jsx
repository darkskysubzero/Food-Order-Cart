import React, { useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Item = (props) => {


    const [item, setItem] = useState({
        itemQuantity: 1
    });


    //=======================MANAGE QUANTITY=================================
    const setQuantity = (e) => {
        setItem({
            ...item,
            itemQuantity: e.target.value
        })
    }

    const increaseQuantity = () => {
        setItem({
            ...item,
            itemQuantity: item.itemQuantity + 1
        })
    }

    const decreaseQuantity = () => {
        let newQuantity = item.itemQuantity;
        if (newQuantity === 1) {
            newQuantity = 1;
        } else {
            newQuantity--;
        }
        setItem({
            ...item,
            itemQuantity: newQuantity
        })
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
                    <div className="product-image"><img src="https://via.placeholder.com/150" /></div>
                    <div className="product-details"><span>Analog Magazing Rack</span><span>Red</span></div>
                </div>
                <div className="product-price">$120</div>
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