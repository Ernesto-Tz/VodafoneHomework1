import {contactObj} from './contact.js'
import {lettersFilterObj} from  './lettersFilterObj.js'

export class contactsLoaderObj {
    
    static displayContacts(currentContacts) {
        const lettersFilter = new lettersFilterObj(currentContacts);
        lettersFilter.displayLettersFilter();

        const contactsContainer = document.getElementById('main-table-container');
        const contactsTemplate = document.getElementById('contact');
        const newContactsBody = document.createElement('div');
        newContactsBody.id = 'contacts-body';

        for (const c of currentContacts) {
            const contactElemnt = document.importNode(contactsTemplate.content, true);
            contactElemnt.querySelector('h3').textContent = c.name;
            contactElemnt.querySelector('#contact-info-email').textContent = c.email;
            contactElemnt.querySelector('#contact-info-phone').textContent = c.phone;
            newContactsBody.appendChild(contactElemnt);
        }
        contactsContainer.replaceChildren(newContactsBody);
        this.createClickListenerContacts(currentContacts);
    }

    //TODO: Improve event listeners
    static createClickListenerContacts(currentContacts) {
        const contactsNameList = document.getElementsByClassName('contact-name');

        for (const i of contactsNameList) {
            i.addEventListener('click', event => {
                // console.log(event.path[0].innerHTML)
                const contact = currentContacts.find(el => el.name === event.path[0].innerHTML);
                this.displaySingleContact(contact);
            });
        }
    }

    static displaySingleContact(contact) {
        this.titlesToggle(contact.name + "'s Profile",'none','none');

        const contactsBody = document.getElementById('contacts-body');
        const contactTemplate = document.getElementById('contact-view-info');
        const contactElemnt = document.importNode(contactTemplate.content, true);
        
        contactElemnt.getElementById('contactName-text').textContent = contact.name;
        contactElemnt.getElementById('contactEmail-text').textContent = contact.email;
        contactElemnt.getElementById('contactPhone-text').textContent = contact.phone;
        contactElemnt.getElementById('deleteContact-Btn').addEventListener('click',() =>{
            const isSure = window.confirm('Are you sure you want to delete '+ contact.name +'?');
            if(isSure){
                const newList = contactObj.deleteContact(contact);
                this.updateContactsView(newList);
            } else {
                window.location.href = './index.html';
            }
        });
        contactElemnt.getElementById('editContact-Btn').addEventListener('click', () => {
            this.editContactView(contact);
        });
        contactsBody.replaceChildren(contactElemnt);
    }

    static filterContactsView(contactsList){        
        const contactsNameList = document.getElementsByClassName('contact-name');
        
        for (const contactEl of contactsNameList) {
            const contact = contactsList.find(c => c.name ===contactEl.innerHTML)
            if(contact.showing === 'FALSE') {
                contactEl.parentNode.style.display = 'none';
            } else {
                contactEl.parentNode.style.display = 'inline-block';
            }
        }
    }

    static updateContactsView (currentContacts) {
        this.titlesToggle('Contacts','flex','inline-block');

        const lettersFilter = new lettersFilterObj(currentContacts);
        lettersFilter.displayLettersFilter();
        this.displayContacts(currentContacts);
    }

    static editContactView(contact){
        const contactsBody = document.getElementById('contacts-body');
        const contactTemplate = document.getElementById('contact-edit-info');
        const contactElemnt = document.importNode(contactTemplate.content, true);
    
        contactElemnt.getElementById('editName-Input').value = contact.name;
        contactElemnt.getElementById('editEmail-Input').value = contact.email;
        contactElemnt.getElementById('editPhone-Input').value = contact.phone;
        contactElemnt.getElementById('saveContact-Btn').addEventListener('click', () =>{
            const newList = contactObj.submitEditContact(contact);
            this.updateContactsView(newList);
        });
        contactsBody.replaceChildren(contactElemnt);
    }

    static newContactView (){
        this.titlesToggle('Add new Contact','none','none');

        const contactsBody = document.getElementById('contacts-body');
        const contactTemplate = document.getElementById('new-contact-view');
        const contactElemnt = document.importNode(contactTemplate.content, true);
        contactElemnt.getElementById('addContact-Btn').addEventListener('click', () =>{
            const newList = contactObj.addNewContact();
            this.updateContactsView(newList);
        });
        contactsBody.replaceChildren(contactElemnt);

    }

    static titlesToggle(titleText, filterDisplay, addBtnDisplay){
        //1. Get title, addButton and filter nodes to be modified.
        const titleCenter = document.getElementById('header-title');
        const docFilt = document.getElementById('filter-body');
        const addLitleBtn = document.getElementById('add-btn');
        titleCenter.innerHTML = titleText;
        docFilt.style.display = filterDisplay;
        addLitleBtn.style.display = addBtnDisplay;
    }
}