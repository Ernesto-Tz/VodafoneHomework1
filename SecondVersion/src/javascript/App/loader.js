
let letterFilter ;

refreshMainView(tempContacts);

//Calls all the necessary functions to create the main view
function refreshMainView(tableToDisplay)
 {
   refreshFilterElemets();
   refreshMainTable(tableToDisplay);
   let docTitle = document.getElementById('header-title');
   let docFilt = document.getElementById('filter-body');
   let docAddLitleBtn = document.getElementById('add-btn');
   docTitle.innerHTML = 'Contacts';
   docFilt.style.display = 'flex';
   docAddLitleBtn.style.display = 'inline-block';

   docAddLitleBtn.addEventListener('click',()=>{
     createAddView()
   });
 }

//Creates an array of letters which will appear on the filter bar
function createLetersFilterArray(){
  letterFilter = [];
  for (var i = 0; i < tempContacts.length; i++) {
    if(i == 0){
      letterFilter.push(tempContacts[i].name[0].toUpperCase());
    }
    else if (!letterFilter.includes(tempContacts[i].name[0].toUpperCase())) {
      letterFilter.push(tempContacts[i].name[0].toUpperCase());
    }
  }
}

//Create and display elements on the filter bar
function refreshFilterElemets (){
  createLetersFilterArray();
  let tableContainer = document.getElementById('filter-table');
  let oldTableBody = document.getElementById('filter-body');
  tableContainer.removeChild(oldTableBody);

  let newTableBody = document.createElement('div');
  newTableBody.id = 'filter-body'
  tableContainer.appendChild(newTableBody);
  letterFilter.sort();
  for (var i = 0; i < letterFilter.length; i++) {
   let currentElement = document.createElement('div');
   currentElement.className = 'filter-element';
   currentElement.innerHTML = letterFilter[i];
   newTableBody.appendChild(currentElement);
  }
  createClickListenerFilter()
}

//Updates the table which contains all contacts elements

function refreshMainTable (contactsToDisplay){
  let tableContainer = document.getElementById('main-table-container');
  let oldTableBody = document.getElementById('main-table-body');
  tableContainer.removeChild(oldTableBody);

  let newTableBody = document.createElement('div');
  newTableBody.id = 'main-table-body'
  tableContainer.appendChild(newTableBody);

  let bootstrapRow = document.createElement('div');
  bootstrapRow.className = 'row';
  newTableBody.appendChild(bootstrapRow);

  for (var i = 0; i < contactsToDisplay.length; i++) {
  //let oldRow = document.getElementsByClassName('row')
   let bootstrapClass = document.createElement('div');
   let currentContName = document.createElement('div');
   let currentContInfo = document.createElement('div');

   //3. Define classes
   bootstrapClass.className = 'col-md-4 contact';
   currentContName.className = 'contact-name';
   currentContInfo.className = 'contact-info';

   //4. Define content
   currentContName.innerHTML = contactsToDisplay[i].name;
   let contactInfoNumb = document.createElement('spam');
   let contactInfoEmail = document.createElement('spam');
   contactInfoNumb.innerHTML = contactsToDisplay[i].phone;
   contactInfoEmail.innerHTML = contactsToDisplay[i].email;

   //5. Append Elements from smallest to bigger
   currentContInfo.appendChild(contactInfoEmail);
   currentContInfo.appendChild(document.createElement('br'));
   currentContInfo.appendChild(contactInfoNumb);
   bootstrapClass.appendChild(currentContName);
   bootstrapClass.appendChild(currentContInfo);
   bootstrapRow.appendChild(bootstrapClass);
  }
  createClickListenerContacts();
}

function createClickListenerFilter()
{
  let filterbuttons = document.getElementsByClassName('filter-element');
  for (var i = 0; i < filterbuttons.length; i++) {
    filterbuttons[i].addEventListener('click', () =>{
      //alert(event.target.innerHTML);
      let newContactsList = [];
      let indexNewContacs = 0;
      for (var i = 0; i < tempContacts.length; i++) {
        if (tempContacts[i].name[0].toUpperCase() == event.target.innerHTML) {
          newContactsList[indexNewContacs] = tempContacts[i];
          indexNewContacs++;
        }
      }
      refreshMainTable(newContactsList);
    });
  }
}

// event listener for available contactsToDisplay
function createClickListenerContacts()
{
  let contactsNameList = document.getElementsByClassName('contact-name');
  for (var i = 0; i < contactsNameList.length; i++) {
    contactsNameList[i].addEventListener('click', () =>{
      let clickedNameObj;
      for (var i = 0; i < tempContacts.length; i++) {
        if (tempContacts[i].name == event.target.innerHTML) {
          clickedNameObj = tempContacts[i];
        }
      }
      console.log(clickedNameObj);
      createContactView(clickedNameObj.name, clickedNameObj.email, clickedNameObj.phone )
    });
  }
}

//Search function
function searchName(){
// 

  // let input = document.getElementById('nameSearchBar').value;
  // input = input.toLowerCase();
  // let contacts = document.getElementsByClassName('contact');
  // console.log(contacts);
  // let namesCon = [];
  // for (var i = 0; i < contacts.length; i++) {
  //   namesCon[i] = contacts[i].name;
  // }
  // console.log(namesCon);
  // for (var i = 0; i < namesCon.length; i++) {
  //   let namesCon = namesCon[i].name;
  //   console.log(name);
    // if (!name.includes(input)) {
    //   namesCon[i].style.display="none";
    // }
    // else {
    //   namesCon[i].style.display="inline-block";
    // }

}
