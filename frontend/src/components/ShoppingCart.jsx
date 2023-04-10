import React, { useEffect, useState } from 'react';
import OrderAPI from '../apis/OrderAPI';

const ShoppingCart = (props) => {

    const [orderList, setOrders] = useState([]);

    useEffect(() => {
        console.log("Orders mounted!")
        OrderAPI.getOrders(setOrders);

    }, [props.userId])

    console.log(orderList[1].orderDish[0]);
    return (
        <>
            <ul>
                {orderList.map(p => <li key={p.id}>{p.orderDish.dish}</li>)}
                {/* <li>{orderList[1].orderDish[0].dish.name}</li> */}
                {/* <li>{orderList.id}</li>
                <li>{orderList.totalPrice}</li>
                <li>{orderList.timeStamp}</li>
                <li>{orderList.progress}</li>
                <li>{orderList.userOrder.id}</li> */}
            </ul>
        </>
    )

}
export default ShoppingCart;