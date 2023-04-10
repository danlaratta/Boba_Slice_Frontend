const URI = "http://localhost:8080/api/order"
const URI2 = "http://localhost:8080/api/orders"

const OrderAPI = {
    createOrder: (orderToCreate, userId) => {
        // fetch( uri for request, request object )
        fetch( URI + `/${userId}`, {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json" }, // header of request
            body: JSON.stringify(orderToCreate) // body of request, convert object to json string
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("ORDER CREATED")
                console.log(data)

                 // the product was created, so we alert the user
                alert("Your order was created!" + 
                    `\nID: ${data.id}` +
                    `\nProgress: ${data.name}` + 
                    `\nTimeStamp: ${data.price}` +
                    `\n:TotalPrice ${data.qty}`
                    )

            } )
            .catch( (error) => { console.log(error) } );
    },

    getOrders: (setOrders) => {
        fetch( URI2 )
            .then((result) => { // go here if the response is successful (200 response)
                console.log("RESULT")
                console.log(result)

                return result.json()
            }) 
            .then((data) => {
                console.log("DATA: ")
                console.log(data)

                setOrders(data)
            }).catch((e) => {
                console.log(e);
            })
        },
                
    getOrderById: (setOrderList, orderId) => {
        console.log(URI + `/${orderId}`)
        fetch( URI + `/${orderId}`,{
            headers: { "Content-Type" : "application/json",
                        "Authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGJlcnRwYWV6IiwiZXhwIjoxNjgxMTc2MjY0LCJpYXQiOjE2ODExNDAyNjR9.9Puqzxzaq0f1QICSyTPgfk_RhCHX5dW0vMSJqqAWbPc",
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE"
                     },
            credentials: "same-origin",
            // mode: "no-cors"
        } )
            .then((result) => { // go here if the response is successful (200 response)
                console.log("RESULT")
                console.log(result)

                return result.json()
            }) 
            .then((data) => {
                console.log("DATA: ")
                console.log(data)

                setOrderList(data)
            })
            .catch((error) => {console.log(error)})  // if fetch fails, go here(400/500 responses)
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
            .catch((error) => {console.log(error)})
    },

    deleteItem: (setOrderList, menuItemId, orderId) => {
        fetch(URI + `/remove?menuItemId=${menuItemId}&orderId=${orderId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then( result => result.json())
            .then((data) => {
                console.log("ITEM Deleted: ")
                console.log(data);

                setOrderList(data);
            })
            .catch((error) => {console.log(error)});
    }


}

export default OrderAPI;