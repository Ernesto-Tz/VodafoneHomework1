import { contactsLoaderObj } from './contactsLoader.js';

export class lettersFilterObj {

    constructor (contactsList) {
        this.contactsList = contactsList;
        this.lettersArray;
        this.tableContainer = document.getElementById('filter-table');
    }

    createLettersArray () {
        this.lettersArray = [];
        for (var i = 0; i < this.contactsList.length; i++) {
            if(i == 0){
            this.lettersArray.push(this.contactsList[i].name[0].toUpperCase());
            }
            else if (!this.lettersArray.includes(this.contactsList[i].name[0].toUpperCase())) {
            this.lettersArray.push(this.contactsList[i].name[0].toUpperCase());
            }
        }
        this.lettersArray.sort();
    }
    
    displayLettersFilter () {
        this.createLettersArray ();

        const newTableBody = document.createElement('div');
        newTableBody.id = 'filter-body'
        this.tableContainer.replaceChildren(newTableBody);

        for (const letter of this.lettersArray) {
            let currentElement = document.createElement('div');
            currentElement.className = 'filter-element';
            currentElement.innerHTML = letter;
            newTableBody.appendChild(currentElement);
            // Create event listener
            currentElement.addEventListener('click', event => {
                const newContactsList = [];
                for (const contact of this.contactsList) {
                    if (contact.name[0].toUpperCase() == event.target.innerHTML) {
                      newContactsList.push(contact)
                    }
                }
                contactsLoaderObj.displayContacts(newContactsList);
            });
        }
    }
}