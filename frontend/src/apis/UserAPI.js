
const authURI = "http://localhost:8080/authenticate";
const URI = "http://localhost:8080/api/user";

const UserAPI = {

    // Albert
    authenticate: (credentials) => {
        fetch(authURI, {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(credentials)
        })
        .then(result => result.json())
        .then (data => {
            console.log("TOKEN CREATED");
            console.log(data);
        })
        .catch((error) => {console.log(error)})
    },

    // Jesus
    getUsers: () => {

    },

    // Albert 
    getUserById: (setUserList, userId) => {
        fetch(URI + `/${userId}` )
        .then((result) => {
            console.log("RESULT");
            console.log(result);

            return result.json();
        })
        .then((data) => {
            console.log("DATA: ");
            console.log(data);

            setUserList(data);
        })
        .catch((error) => {console.log(error)} );
    },

    // Jesus
    createUser: (setUserList) => {

    },

    // Albert
    updatePayment: () => {

    }
    
}
export default UserAPI;