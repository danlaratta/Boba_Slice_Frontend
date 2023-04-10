
const authURI = "http://localhost:8080/authenticate";
const URI = "http://localhost:8080/api/user";

const jwt = "";

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

            jwt = data;

        })
        .catch((error) => {console.log(error)})
    },

    // Jesus
    getUsers: () => {

    },

    // Albert 
    getUserById: (setUserList, userId) => {
        fetch(URI + `/${userId}`, {
            Authorization: `Bearer ${jwt}`
        } )
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
    updatePayment: (userId, newPayment) => {
        fetch(URI, `/${userId}`,{
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPayment),
            Authorization: `Bearer ${jwt}`
        })
        .then((result) => {
            console.log("RESULT");
            console.log(result);

            return result.json();
        })
        .then((data) => {
            console.log("DATA");
            console.log(data);

        })
        .catch((error) => {console.log(error)});
    }
    
}
export default UserAPI;