
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
    getUsers: (setUsersList) => {
        fetch( URI )
            .then((result) => { // go here if the response is successful (200 response)
                console.log("RESULT")
                console.log(result)

                return result.json()
            }) 
            .then((data) => {
                console.log("DATA: ")
                console.log(data)

                setUsersList(data)
            }).catch((e) => {
                console.log(e);
            })
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
    createUser: (userToCreate) => {
        fetch( URI , {
            method: "POST", // type of request
            headers: { "Content-Type": "application/json" }, // header of request
            body: JSON.stringify(userToCreate) // body of request, convert object to json string
        } )
            .then( result => result.json() )
            .then( data => {
                console.log("ORDER CREATED")
                console.log(data)

                alert("Your user was created!" + 
                    `\nID: ${data.id}` +
                    `\nEmail: ${data.name}` + 
                    `\nFirstName: ${data.qty}` +
                    `\nLastName: ${data.qty}` +
                    `\nUsername: ${data.username}`
                    )

            } )
            .catch( (error) => { console.log(error) } );

    },

    // Albert
    updatePayment: () => {

    }
    
}
export default UserAPI;