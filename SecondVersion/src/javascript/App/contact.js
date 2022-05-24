import tempContacts from '../Utility/contacts.js'

export class contactObj {

  static addNewContact() {
      const newPersonName = document.getElementById('NewName-Input').value;
      const newPersonEmail = document.getElementById('NewEmail-Input').value;
      const newPersonPhone = document.getElementById('NewPhone-Input').value;
      if(newPersonName === ''){
        alert('Insert Name');
      }
      else if (newPersonEmail === '') {
        alert('Insert Email');
      }
      else if (newPersonPhone === '') {
        alert('Insert Phone');
      }
      else if(newPersonName !== '' && newPersonEmail !== '' && newPersonPhone !== ''){
        const newPerson = {
        'name' : newPersonName,
        'phone': newPersonPhone,
        'email': newPersonEmail
        }
        tempContacts.push(newPerson);
        return tempContacts;
      }
    }
      
  static submitEditContact(contact) {
    const index = tempContacts.indexOf(contact);
    let newPersonName = document.getElementById('editName-Input').value;
    let newPersonEmail = document.getElementById('editEmail-Input').value;
    let newPersonPhone = document.getElementById('editPhone-Input').value;
    if(newPersonName === ''){
      alert('Insert Name');
      newPersonName = contact.name;
    }
    else if (newPersonEmail === '') {
      alert('Insert Email');
      newPersonEmail = contact.email;
    }
    else if (newPersonPhone === '') {
      alert('Insert Phone');
      newPersonPhone = contact.phone;
    }
    else if(newPersonName !== '' && newPersonEmail !== '' && newPersonPhone !== ''){
      const newPerson ={
      'name' : newPersonName,
      'phone': newPersonPhone,
      'email': newPersonEmail
      }
      tempContacts[index] = newPerson;
      return tempContacts;
    }
  }

  static deleteContact (contact) {
    const index = tempContacts.indexOf(contact);
    tempContacts.splice(index,1);
    return tempContacts;
  }
}