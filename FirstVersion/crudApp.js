// ---------CRUD operations---

function addNewContact(){
  let newPersonName = document.getElementById('NewName-Input').value;
  let newPersonEmail = document.getElementById('NewEmail-Input').value;
  let newPersonPhone = document.getElementById('NewPhone-Input').value;
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
    let newPerson ={
    'name' : newPersonName,
    'phone': newPersonPhone,
    'email': newPersonEmail
    }
    tempContacts.push(newPerson);
    refreshMainView(tempContacts);
    console.log(tempContacts);
    
  }
}


function submitEditContact(index){
  let newPersonName = document.getElementById('editName-Input').value;
  let newPersonEmail = document.getElementById('editEmail-Input').value;
  let newPersonPhone = document.getElementById('editPhone-Input').value;
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
    let newPerson ={
    'name' : newPersonName,
    'phone': newPersonPhone,
    'email': newPersonEmail
    }
    tempContacts[index] = newPerson;
    refreshMainView(tempContacts);
    console.log(tempContacts[index]);
  }
}
//
function deleteContact (contactName){
  let newTempTable = [];
  let j = 0;
  for (var i = 0; i < tempContacts.length; i++) {
    if (tempContacts[i].name !== contactName) {
      newTempTable[j] = tempContacts[i];
      j++;
    }
  }
  tempContacts = newTempTable;
  refreshMainView(tempContacts);
  console.log(tempContacts);
}


// Creating views for different operations

function  createContactView(contactN, contactE, contactP ){
  //Changing titles and filter
  let docTitle = document.getElementById('header-title');
  let docFilt = document.getElementById('filter-body');
  let docAddLitleBtn = document.getElementById('add-btn');
  docTitle.innerHTML = contactN + "'s Profile";
  docFilt.style.display = 'none';
  docAddLitleBtn.style.display = 'none';

  let viewContainer = document.getElementById('main-table-container');
  let oldViewBody = document.getElementById('main-table-body');
  viewContainer.removeChild(oldViewBody);

  let newViewBody = document.createElement('div');
  newViewBody.id = 'main-table-body'
  viewContainer.appendChild(newViewBody);

  let nameLabel = document.createElement('label');
  let emailLabel = document.createElement('label');
  let phoneLabel = document.createElement('label');
  let nameText = document.createElement('div');
  let emailText = document.createElement('div');
  let phoneText = document.createElement('div');

  nameLabel.id = 'contactName-Lbl'
  emailLabel.id = 'contactEmail-Lbl'
  phoneLabel.id = 'contactPhone-Lbl'
  nameText.id = 'contactName-text'
  emailText.id = 'contactEmail-text'
  phoneText.id = 'contactPhone-text'

  nameLabel.innerHTML = 'Name:'
  emailLabel.innerHTML = 'E-mail:'
  phoneLabel.innerHTML = 'Phone:'
  nameText.innerHTML = contactN;
  emailText.innerHTML = contactE;
  phoneText.innerHTML = contactP;

  for (var i = 0; i < 4; i++) {
    let newViewRow = document.createElement('div');
    newViewRow.className = 'contact-row'


    if (i == 0) {
      newViewRow.appendChild(nameLabel);
      newViewRow.appendChild(nameText);
      newViewBody.appendChild(newViewRow);
    }
    else if (i == 1 ) {
      newViewRow.appendChild(emailLabel);
      newViewRow.appendChild(emailText);
      newViewBody.appendChild(newViewRow);
    }
    else if (i == 2 ) {
      newViewRow.appendChild(phoneLabel);
      newViewRow.appendChild(phoneText);
      newViewBody.appendChild(newViewRow);
    }
    else if (i == 3 ) {
      let rowCrudButtons = document.createElement('div');
      rowCrudButtons.className = 'conteiner crud-btns';
      let deleteBtn = document.createElement('button')
      let editBtn = document.createElement('button')

      deleteBtn.id = 'deleteContact-Btn';
      deleteBtn.className = 'btn btn-light';
      deleteBtn.type = 'button';
      editBtn.id = 'editContact-Btn';
      editBtn.className = 'btn btn-light';
      editBtn.type = 'button';

      deleteBtn.innerHTML = 'Delete';
      editBtn.innerHTML = 'Edit';

      rowCrudButtons.appendChild(deleteBtn);
      rowCrudButtons.appendChild(editBtn);
      newViewBody.appendChild(rowCrudButtons);
    }
  }

  let editBtnEvent = document.getElementById('editContact-Btn');
  editBtnEvent.addEventListener('click',() =>{
    createEditContactView(contactN, contactE, contactP);
  });

  let deleteBtnEvent = document.getElementById('deleteContact-Btn');
  deleteBtnEvent.addEventListener('click',() =>{
    let isSure = window.confirm('Are you sure you want to delete '+ contactN +'?');
    if(isSure){
     deleteContact (contactN);
    }
  });

}

function  createAddView(){
  //Changing titles and filter
  let docTitle = document.getElementById('header-title');
  let docFilt = document.getElementById('filter-body');
  let docAddLitleBtn = document.getElementById('add-btn');
  docTitle.innerHTML = 'Add New Contact';
  docFilt.style.display = 'none';
  docAddLitleBtn.style.display = 'none';

  let viewContainer = document.getElementById('main-table-container');
  let oldViewBody = document.getElementById('main-table-body');
  viewContainer.removeChild(oldViewBody);

  let newViewBody = document.createElement('div');
  newViewBody.id = 'main-table-body'
  viewContainer.appendChild(newViewBody);

  let nameLabel = document.createElement('label');
  let emailLabel = document.createElement('label');
  let phoneLabel = document.createElement('label');
  let nameInput = document.createElement('input');
  let emailInput = document.createElement('input');
  let phoneInput = document.createElement('input');

  nameLabel.id = 'newName-Lbl';
  emailLabel.id = 'newEmail-Lbl';
  phoneLabel.id = 'newPhone-Lbl';
  nameInput.id = 'NewName-Input';
  emailInput.id = 'NewEmail-Input';
  phoneInput.id = 'NewPhone-Input';

  nameLabel.innerHTML = 'Name';
  emailLabel.innerHTML = 'Email';
  phoneLabel.innerHTML = 'Phone';
  nameInput.placeholder = 'Enter Name';
  emailInput.placeholder = 'Enter Email';
  phoneInput.placeholder = 'Enter Phone';

  for (var i = 0; i < 4; i++) {
    let boostrRow = document.createElement('div');
    boostrRow.className = 'col-md-12'

    if (i == 0) {
      boostrRow.appendChild(nameInput);
      newViewBody.appendChild(nameLabel);
      newViewBody.appendChild(boostrRow)
    }
    else if (i == 1 ) {
      boostrRow.appendChild(emailInput);
      newViewBody.appendChild(emailLabel);
      newViewBody.appendChild(boostrRow)
    }
    else if (i == 2 ) {
      boostrRow.appendChild(phoneInput);
      newViewBody.appendChild(phoneLabel);
      newViewBody.appendChild(phoneInput)
    }
    else if (i == 3 ) {
      let rowCrudButtons = document.createElement('div');
      rowCrudButtons.className = 'conteiner crud-btns';
      let addContactBTn = document.createElement('button')

      addContactBTn.id = 'addContact-Btn';
      addContactBTn.className = 'btn btn-light';
      addContactBTn.type = 'button';

      addContactBTn.innerHTML = 'Add Contact';

      rowCrudButtons.appendChild(addContactBTn);
      newViewBody.appendChild(rowCrudButtons);
    }
  }

  let addBtnEvent = document.getElementById('addContact-Btn');
  addBtnEvent.addEventListener('click',() =>{
   addNewContact();
  });
}
//Update view for Edit contact
function  createEditContactView(contactN, contactE, contactP ){
  //Changing titles and filter
  let docTitle = document.getElementById('header-title');
  let docFilt = document.getElementById('filter-body');
  let docAddLitleBtn = document.getElementById('add-btn');
  docTitle.innerHTML = "Edit "+ contactN + "'s Profile";
  docFilt.style.display = 'none';
  docAddLitleBtn.style.display = 'none';

  let viewContainer = document.getElementById('main-table-container');
  let oldViewBody = document.getElementById('main-table-body');
  viewContainer.removeChild(oldViewBody);

  let newViewBody = document.createElement('div');
  newViewBody.id = 'main-table-body'
  viewContainer.appendChild(newViewBody);

  let nameLabel = document.createElement('label');
  let emailLabel = document.createElement('label');
  let phoneLabel = document.createElement('label');
  let nameInput = document.createElement('input');
  let emailInput = document.createElement('input');
  let phoneInput = document.createElement('input');

  nameLabel.id = 'contactName-Lbl';
  emailLabel.id = 'contactEmail-Lbl';
  phoneLabel.id = 'contactPhone-Lbl';
  nameInput.id = 'editName-Input';
  emailInput.id = 'editEmail-Input';
  phoneInput.id = 'editPhone-Input';

  nameLabel.innerHTML = 'Name:'
  emailLabel.innerHTML = 'E-mail:'
  phoneLabel.innerHTML = 'Phone:'
  nameInput.value = contactN;
  emailInput.value = contactE;
  phoneInput.value = contactP;

  for (var i = 0; i < 4; i++) {
    let newViewRow = document.createElement('div');
    newViewRow.className = 'contact-row'


    if (i == 0) {
      newViewRow.appendChild(nameLabel);
      newViewRow.appendChild(nameInput);
      newViewBody.appendChild(newViewRow);
    }
    else if (i == 1 ) {
      newViewRow.appendChild(emailLabel);
      newViewRow.appendChild(emailInput);
      newViewBody.appendChild(newViewRow);
    }
    else if (i == 2 ) {
      newViewRow.appendChild(phoneLabel);
      newViewRow.appendChild(phoneInput);
      newViewBody.appendChild(newViewRow);
    }
    else if (i == 3 ) {
      let rowCrudButtons = document.createElement('div');
      rowCrudButtons.className = 'conteiner crud-btns';
      let saveContactBTn = document.createElement('button')

      saveContactBTn.id = 'saveContact-Btn';
      saveContactBTn.className = 'btn btn-light';
      saveContactBTn.type = 'button';

      saveContactBTn.innerHTML = 'Save Contact';

      rowCrudButtons.appendChild(saveContactBTn);
      newViewBody.appendChild(rowCrudButtons);
    }
  }

  let oldContact = {
  'name' : contactN,
  'phone': contactP,
  'email': contactE
  }
  let index;
  for (var i = 0; i < tempContacts.length; i++) {
    if (tempContacts[i].name === oldContact.name) {
      index = i;
    }
  }
  let addBtnEvent = document.getElementById('saveContact-Btn');
  addBtnEvent.addEventListener('click',() =>{
   submitEditContact(index);
  });
}
