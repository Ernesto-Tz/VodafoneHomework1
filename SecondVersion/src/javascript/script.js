import tempContacts from './Utility/contacts.js'

console.log(tempContacts);

function createLettersFilter () {
   const lettersFilter = [];
   for (var i = 0; i < tempContacts.length; i++) {
      if(i == 0){
         lettersFilter.push(tempContacts[i].name[0].toUpperCase());
      }
      else if (!lettersFilter.includes(tempContacts[i].name[0].toUpperCase())) {
         lettersFilter.push(tempContacts[i].name[0].toUpperCase());
      }
   }
   console.log(lettersFilter);
}

createLettersFilter();