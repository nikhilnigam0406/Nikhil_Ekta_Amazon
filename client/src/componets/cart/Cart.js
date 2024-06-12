import React from 'react'
import "./cart.css";
import { Divider, colors } from '@mui/material';
const Cart = () => {
    return (
        <div className='cart_section'>
            <div className='cart_container'>
                <div className="left_cart">
                    <img src="  https://rukminim2.flixcart.com/image/612/612/kw85bww0/t-shirt/t/0/4/s-ts-801-803-tqh-original-imag8ycsms2ej5fz.jpeg?q=70" alt="" />
                    <div className="cart_btn">
                        <button className='cart_btn1'>Add To Cart</button>
                        <button className='cart_btn2'>Buy Now</button>
                    </div>
                </div>
                <div className="right_cart">
                    <h3>Fitness T-shirt</h3>
                    <h4>Pigeon Favourite Electric kettle </h4>
                    <Divider />
                    <p className="mrp">M.R.P : $54</p>
                    <p>Deal of the Day: <span style={{ color: "#B12704" }}>$49</span></p>
                    <p>You save: : <span style={{ color: "#B12704" }}>$29(41%)</span></p>

                    <div className="discount_box">
                        <h5>Discount:<span style={{ color: "#B12704" }}>$29(41%)</span></h5>
                        <p className="description">About the Iteam : Pack of 2 TQH Solid Men Round Neck Sleeveless Black, Light Grey T-Shirt Men Solid Round Neck Polyester Black, Grey T-Shirt <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}></span></p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cart
