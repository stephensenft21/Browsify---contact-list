import Contactlist from "./Contactlist"
import contactCollection from "./contactCollection"
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
            contactCollection.POSTcontact(newContact)
             .then(() => {
                 const displayContainer = document.querySelector("#display-container")
                 while(displayContainer.firstChild){
                     displayContainer.removeChild(displayContainer.firstChild)
                 }
                 contactName.value = ""
                 contactNumber.value = ""
                 contactAddress.value = ""
             })
             .then(Contactlist.listAllContacts)
        
        },

      
    }
    


    //look up syntax for post request 
