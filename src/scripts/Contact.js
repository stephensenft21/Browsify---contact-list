export default {
    buildContact(contact) {
        const contactArticle = document.createElement("article");
        const contactHeader = document.createElement("h3");
        contactHeader.textContent = contact.name;

        const contactNumberParagraph = document.createElement("p")
        contactNumberParagraph.textContent = contact.number

        const contactAddressParagraph = document.createElement("p")
        contactAddressParagraph.textContent = contact.address

        contactArticle.appendChild(contactHeader)
        contactArticle.appendChild(contactNumberParagraph)
        contactArticle.appendChild(contactAddressParagraph)
        return contactArticle
    }
}