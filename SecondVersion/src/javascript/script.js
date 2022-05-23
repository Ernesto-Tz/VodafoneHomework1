import tempContacts from './Utility/contacts.js'
import {lettersFilterObj} from  './App/lettersFilterObj.js'
import { contactsLoaderObj } from './App/contactsLoader.js';

const lettersFilter = new lettersFilterObj(tempContacts);
lettersFilter.displayLettersFilter();

contactsLoaderObj.displayContacts(tempContacts);

const addLtlBtn = document.querySelector('#add-btn');
addLtlBtn.addEventListener('click', () =>{
    // console.log('I am trying to go to another page')
    window.location.href = './newContact.html';
});