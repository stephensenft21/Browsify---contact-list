import contactCollection from "./contactCollection";
import contact from "./Contact"

export default {
    listAllContacts() {
        contactCollection.GETcontacts().then(contactsResponse => {
            const contactSection = document.createElement("section")

            contactsResponse.forEach((theContact) => {
                console.log(theContact)
                const contactHTML = contact.buildContact(theContact)
                contactSection.appendChild(contactHTML)
            })
             const displayContainer = document.querySelector(".display-container");
                   displayContainer.appendChild(contactSection);
        })
    }
}