export default {

    GETcontacts: () =>{
     return fetch("http://localhost:8088/contactList")
        .then(response => response.json())
    },
    POSTcontact: (contact) => {
        return fetch ("http:localhost:8088/contactList",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        }).then(response => response.json())
    }
}





