import React, { useEffect } from "react";
import Table from 'react-bootstrap/Table';
import { UseBuyBestContext } from "../../Utils/GlobalState";


function Cart() {

    useEffect(() => {
        dispatch({ type: "getCart" });
    }, [])


    const [state, dispatch] = UseBuyBestContext();
    console.log("cart.state: ", state.cart);


    return (
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th>Item Name</th>
                    <th>Purchase Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {state.cart.map(item => (
                    <tr>
                        <th><img src={item.thumbnailImage} /></th>
                        <th>{item.name}</th>
                        <th>{item.salePrice}</th>
                        <th>Number</th>
                        <th>x</th>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Cart;