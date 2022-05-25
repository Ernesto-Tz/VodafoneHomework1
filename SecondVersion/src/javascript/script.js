import tempContacts from './Utility/contacts.js'
import { contactsLoaderObj } from './App/contactsLoader.js';


contactsLoaderObj.displayContacts(tempContacts);

const addLtlBtn = document.querySelector('#add-btn');
addLtlBtn.addEventListener('click', () =>{
    contactsLoaderObj.newContactView();
});

const searchBar = document.querySelector('#nameSearchBar');
searchBar.addEventListener('input', event => {
    contactsLoaderObj.searchName(event.target.value.toLowerCase(),tempContacts);
});
