const URI = "http://localhost:8080/api/menu/drinks"

const FoodAPI = {
    getDrinks: (setDrinkList) => {
        fetch( URI )
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
    }
}