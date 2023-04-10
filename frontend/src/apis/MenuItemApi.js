const URI = "http://localhost:8080/api/menu"

const MenuItemAPI = {
    getDrinks: (setDrinkList) => {
        fetch( URI + "/drinks" )
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
    
    getDishes: (setDishList) => {

        fetch(URI + "/dishes")
            .then((result) => {
                console.log("RESULT");
                console.log(result);

                return result.json();
            })
            .then((data) => {
                console.log("DATA: ")
                console.log(data);

                setDishList(data);
            })
            .catch((error) => {console.log(error)});
    }
}
export default MenuItemAPI;
