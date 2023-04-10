import React, { useEffect, useState } from 'react';
import OrderAPI from '../apis/OrderAPI';

const ShoppingCart = (props) => {

    const [orderList, setOrders] = useState([]);

    useEffect(() => {
        console.log("Orders mounted!")
        OrderAPI.getOrderById(setOrders,props.userId);
    }, [props.userId])

    return (
        <>
            <ul>
                {orderList.map(p => <li key={p.id}>{p.totalPrice}</li>)}
            </ul>
        </>
    )

}
export default ShoppingCart;