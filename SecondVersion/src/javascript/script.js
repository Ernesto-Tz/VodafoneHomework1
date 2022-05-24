import tempContacts from './Utility/contacts.js'
import { contactsLoaderObj } from './App/contactsLoader.js';


contactsLoaderObj.displayContacts(tempContacts);

const addLtlBtn = document.querySelector('#add-btn');
addLtlBtn.addEventListener('click', () =>{
    contactsLoaderObj.newContactView();
});
