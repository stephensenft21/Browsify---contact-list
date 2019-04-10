import contacts from "./ContactForm"

export default  {
    saveButtonHandler:() => {
        //   console.log(event.target.value)
        
     
            const contactName = document.querySelector("#name")
            const contactNumber = document.querySelector("#number")
            const contactAddress = document.querySelector("#address")
    
        
            let newContact = {
                name: contactName.value,
                phone: contactNumber.value,
                address: contactAddress.value
            }
            console.log(newContact)
            POSTcontact.
        }

    }
