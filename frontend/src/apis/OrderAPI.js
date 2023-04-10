const URI = "http://localhost:8080/api/order"

const OrderAPI = {

    getOrderById: (setOrderList, orderId) => {
        fetch( URI + `/${orderId}`  )
            .then((result) => { // go here if the response is successful (200 response)
                console.log("RESULT")
                console.log(result)

                return result.json()
            }) 
            .then((data) => {
                console.log("DATA: ")
                console.log(data)

                setDrinkList(data)
            })
            .catch((error) => {console.log(error)});  // if fetch fails, go here(400/500 responses)
    },
    
    addItem: (setOrderList, menuItemId, orderId) => {

        fetch(URI + `/add?menuItemId=${menuItemId}&orderId=${orderId}`, {
            method: "POST",
            headers: { "Content-Type" : "application/json"},
        })
            .then( result => result.json())
            .then((data) => {
                console.log("ITEM ADDED: ")
                console.log(data);

                setOrderList(data);
            })
            .catch((error) => {console.log(error)});
    }
}
export default OrderAPI;
