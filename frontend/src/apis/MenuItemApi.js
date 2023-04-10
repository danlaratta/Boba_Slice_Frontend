
const URI = "http://localhost:8080/api/menu";

const MenuItemApi = {

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

export default MenuItemApi;