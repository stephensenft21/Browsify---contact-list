//function to build form
import handler from "./eventHandler"

export default {
    buildFormHTML: () => {
        const nameLabel = document.createElement("label")

        nameLabel.textContent = "Contact name"
        const name = document.createElement("input")
        name.id = "name"
        name.placeholder = "Enter Name"


        const phNumberLabel = document.createElement("label")
        phNumberLabel.textContent = "PhoneNumber"
        const number = document.createElement("input")
        number.id = "number"
        number.placeholder = "XXX-YYY-ZZZZ"


        const addressLabel = document.createElement("label")
        addressLabel.textContent = "Contact Address"

        const address = document.createElement("input")
        address.id = "address"
        address.placeholder = "Enter Address"

        //-------------------------
        const saveButton = document.createElement("button")
        saveButton.id = "saveButton"
        saveButton.textContent = "Save Contact"
        saveButton.addEventListener("click", handler.saveButtonHandler)


        const formSectionElement = document.createElement("section")
        formSectionElement.appendChild(nameLabel)
        formSectionElement.appendChild(name)
        formSectionElement.appendChild(phNumberLabel)
        formSectionElement.appendChild(number)
        formSectionElement.appendChild(addressLabel)
        formSectionElement.appendChild(address)
        formSectionElement.appendChild(saveButton)



        const formContainer = document.querySelector("#form-container")
        formContainer.appendChild(formSectionElement)
    }
    /*addNewContact: () => {
        const contactName = document.querySelector("#name")
        const contactNumber = document.querySelector("#number")
        const contactAddress = document.querySelector("#address")

    
        let newContact = {
            name: contactName.value,
            phone: contactNumber.value,
            address: contactAddress.value
        }
        console.log(newContact)
    }*/
}

