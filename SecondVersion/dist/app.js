/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascript/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascript/App/contact.js":
/*!***************************************!*\
  !*** ./src/javascript/App/contact.js ***!
  \***************************************/
/*! exports provided: contactObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactObj\", function() { return contactObj; });\n/* harmony import */ var _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/contacts.js */ \"./src/javascript/Utility/contacts.js\");\n\n\nclass contactObj {\n\n  static addNewContact(name, email, phone) {\n      const newPersonName = document.getElementById('NewName-Input').value;\n      const newPersonEmail = document.getElementById('NewEmail-Input').value;\n      const newPersonPhone = document.getElementById('NewPhone-Input').value;\n      if(name === ''){\n        alert('Insert Name');\n      }\n      else if (email === '') {\n        alert('Insert Email');\n      }\n      else if (phone === '') {\n        alert('Insert Phone');\n      }\n      else if(newPersonName !== '' && newPersonEmail !== '' && newPersonPhone !== ''){\n        const newPerson = {\n        'name' : newPersonName,\n        'phone': newPersonPhone,\n        'email': newPersonEmail\n        }\n        _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(newPerson);\n        return _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n      }\n    }\n      \n  static submitEditContact(contact) {\n    const index = _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOf(contact);\n    let newPersonName = document.getElementById('editName-Input').value;\n    let newPersonEmail = document.getElementById('editEmail-Input').value;\n    let newPersonPhone = document.getElementById('editPhone-Input').value;\n    if(newPersonName === ''){\n      alert('Insert Name');\n      newPersonName = contact.name;\n    }\n    else if (newPersonEmail === '') {\n      alert('Insert Email');\n      newPersonEmail = contact.email;\n    }\n    else if (newPersonPhone === '') {\n      alert('Insert Phone');\n      newPersonPhone = contact.phone;\n    }\n    else if(newPersonName !== '' && newPersonEmail !== '' && newPersonPhone !== ''){\n      const newPerson ={\n      'name' : newPersonName,\n      'phone': newPersonPhone,\n      'email': newPersonEmail\n      }\n      _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index] = newPerson;\n      return _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    }\n  }\n\n  static deleteContact (contact) {\n    const index = _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].indexOf(contact);\n    _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(index,1);\n    return _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n}\n\n//# sourceURL=webpack:///./src/javascript/App/contact.js?");

/***/ }),

/***/ "./src/javascript/App/contactsLoader.js":
/*!**********************************************!*\
  !*** ./src/javascript/App/contactsLoader.js ***!
  \**********************************************/
/*! exports provided: contactsLoaderObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactsLoaderObj\", function() { return contactsLoaderObj; });\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/javascript/App/contact.js\");\n/* harmony import */ var _lettersFilterObj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lettersFilterObj.js */ \"./src/javascript/App/lettersFilterObj.js\");\n\n\n\nclass contactsLoaderObj {\n    \n    static displayContacts(currentContacts) {\n        const contactsContainer = document.getElementById('main-table-container');\n        const contactsTemplate = document.getElementById('contact');\n        const newContactsBody = document.createElement('div');\n        newContactsBody.id = 'contacts-body';\n\n        for (const c of currentContacts) {\n            const contactElemnt = document.importNode(contactsTemplate.content, true);\n            contactElemnt.querySelector('h3').textContent = c.name;\n            contactElemnt.querySelector('#contact-info-email').textContent = c.email;\n            contactElemnt.querySelector('#contact-info-phone').textContent = c.phone;\n            newContactsBody.appendChild(contactElemnt);\n        }\n        contactsContainer.replaceChildren(newContactsBody);\n        this.createClickListenerContacts(currentContacts);\n    }\n\n    //TODO: Improve event listeners\n    static createClickListenerContacts(currentContacts) {\n        const contactsNameList = document.getElementsByClassName('contact-name');\n\n        for (const i of contactsNameList) {\n            i.addEventListener('click', event => {\n                // console.log(event.path[0].innerHTML)\n                const contact = currentContacts.find(el => el.name === event.path[0].innerHTML);\n                this.displaySingleContact(contact);\n            });\n        }\n    }\n\n    static displaySingleContact(contact) {\n        //1. Get title, addButton and filter nodes to be modified.\n        const titleCenter = document.getElementById('header-title');\n        const docFilt = document.getElementById('filter-body');\n        const addLitleBtn = document.getElementById('add-btn');\n        titleCenter.innerHTML = contact.name + \"'s Profile\";\n        docFilt.style.display = 'none';\n        addLitleBtn.style.display = 'none';\n\n        //2. Modified template and delete old body\n        const contactsBody = document.getElementById('contacts-body');\n        const contactTemplate = document.getElementById('contact-view-info');\n        const contactElemnt = document.importNode(contactTemplate.content, true);\n        \n        contactElemnt.getElementById('contactName-text').textContent = contact.name;\n        contactElemnt.getElementById('contactEmail-text').textContent = contact.email;\n        contactElemnt.getElementById('contactPhone-text').textContent = contact.phone;\n        contactElemnt.getElementById('deleteContact-Btn').addEventListener('click',() =>{\n            const isSure = window.confirm('Are you sure you want to delete '+ contact.name +'?');\n            if(isSure){\n                const newList = _contact_js__WEBPACK_IMPORTED_MODULE_0__[\"contactObj\"].deleteContact(contact);\n                this.updateContactsView(newList);\n            } else {\n                window.location.href = './index.html';\n            }\n        });\n        contactElemnt.getElementById('editContact-Btn').addEventListener('click', () => {\n            this.editContactView(contact);\n        });\n        contactsBody.replaceChildren(contactElemnt);\n    }\n\n    static updateContactsView (currentContacts) {\n        const titleCenter = document.getElementById('header-title');\n        const docFilt = document.getElementById('filter-body');\n        const addLitleBtn = document.getElementById('add-btn');\n        titleCenter.innerHTML = 'Contacts';\n        docFilt.style.display = 'flex';\n        addLitleBtn.style.display = 'inline-block';\n\n        const lettersFilter = new _lettersFilterObj_js__WEBPACK_IMPORTED_MODULE_1__[\"lettersFilterObj\"](currentContacts);\n        lettersFilter.displayLettersFilter();\n        this.displayContacts(currentContacts);\n    }\n\n    static editContactView(contact){\n        const contactsBody = document.getElementById('contacts-body');\n        const contactTemplate = document.getElementById('contact-edit-info');\n        const contactElemnt = document.importNode(contactTemplate.content, true);\n    \n        contactElemnt.getElementById('editName-Input').value = contact.name;\n        contactElemnt.getElementById('editEmail-Input').value = contact.email;\n        contactElemnt.getElementById('editPhone-Input').value = contact.phone;\n        contactElemnt.getElementById('saveContact-Btn').addEventListener('click', () =>{\n            const newList = _contact_js__WEBPACK_IMPORTED_MODULE_0__[\"contactObj\"].submitEditContact(contact);\n            this.updateContactsView(newList);\n        });\n        contactsBody.replaceChildren(contactElemnt);\n    }\n}\n\n//# sourceURL=webpack:///./src/javascript/App/contactsLoader.js?");

/***/ }),

/***/ "./src/javascript/App/lettersFilterObj.js":
/*!************************************************!*\
  !*** ./src/javascript/App/lettersFilterObj.js ***!
  \************************************************/
/*! exports provided: lettersFilterObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lettersFilterObj\", function() { return lettersFilterObj; });\n/* harmony import */ var _contactsLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactsLoader.js */ \"./src/javascript/App/contactsLoader.js\");\n\n\nclass lettersFilterObj {\n\n    constructor (contactsList) {\n        this.contactsList = contactsList;\n        this.lettersArray;\n        this.tableContainer = document.getElementById('filter-table');\n    }\n\n    createLettersArray () {\n        this.lettersArray = [];\n        for (var i = 0; i < this.contactsList.length; i++) {\n            if(i == 0){\n            this.lettersArray.push(this.contactsList[i].name[0].toUpperCase());\n            }\n            else if (!this.lettersArray.includes(this.contactsList[i].name[0].toUpperCase())) {\n            this.lettersArray.push(this.contactsList[i].name[0].toUpperCase());\n            }\n        }\n        this.lettersArray.sort();\n    }\n    \n    displayLettersFilter () {\n        this.createLettersArray ();\n\n        const newTableBody = document.createElement('div');\n        newTableBody.id = 'filter-body'\n        this.tableContainer.replaceChildren(newTableBody);\n\n        for (const letter of this.lettersArray) {\n            let currentElement = document.createElement('div');\n            currentElement.className = 'filter-element';\n            currentElement.innerHTML = letter;\n            newTableBody.appendChild(currentElement);\n            // Create event listener\n            currentElement.addEventListener('click', event => {\n                const newContactsList = [];\n                for (const contact of this.contactsList) {\n                    if (contact.name[0].toUpperCase() == event.target.innerHTML) {\n                      newContactsList.push(contact)\n                    }\n                }\n                _contactsLoader_js__WEBPACK_IMPORTED_MODULE_0__[\"contactsLoaderObj\"].displayContacts(newContactsList);\n            });\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/javascript/App/lettersFilterObj.js?");

/***/ }),

/***/ "./src/javascript/Utility/contacts.js":
/*!********************************************!*\
  !*** ./src/javascript/Utility/contacts.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n  { 'name' : 'Kiss Bence',\n    'phone': '3670303030',\n    'email': 'bence.kiss@vodafone.com'  \n  },\n  { 'name' : 'Kovacs Ibolya',\n    'phone': '3670404040',\n    'email': 'ibolya.kovacs@vodafone.com'\n  },\n  { 'name' : 'Nagy David',\n    'phone': '3670505050',\n    'email': 'david.nagy@vodafone.com'\n  },\n  { 'name' : 'Apro Balint',\n    'phone': '3670606060',\n    'email': 'balint.apro@vodafone.com'\n  },\n  { 'name' : 'Ernesto Tzompantzi',\n    'phone': '3670707070',\n    'email': 'tzompantzi.ernesto@vodafone.com'\n  },\n  {'name' : 'Nagy Renata',\n  'phone': '3670808080',\n  'email': 'renata.nagy@vodafone.com'\n  },\n  { 'name' : 'David Zoltan',\n    'phone': '3670909090',\n    'email': 'zoltan.david@vodafone.com'\n  },\n  {'name' : 'Toth Tomas',\n  'phone': '3671010100',\n  'email': 'tomas.toth@vodafone.com'\n  },\n  {'name' : 'Fodor Bernadett',\n  'phone': '3671111110',\n  'email': 'bernadett.fodor@vodafone.com'\n  },\n  {'name' : 'Arnold Bath',\n  'phone': '3671103010',\n  'email': 'arnold.bath@vodafone.com'\n  },\n  {'name' : 'Jones Chris',\n  'phone': '36712223010',\n  'email': 'jones.chris@vodafone.com'\n  },\n  {'name' : 'Kuz Nate',\n  'phone': '36712943810',\n  'email': 'kuz.nate@vodafone.com'\n  },\n]);\n\n\n//# sourceURL=webpack:///./src/javascript/Utility/contacts.js?");

/***/ }),

/***/ "./src/javascript/script.js":
/*!**********************************!*\
  !*** ./src/javascript/script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/contacts.js */ \"./src/javascript/Utility/contacts.js\");\n/* harmony import */ var _App_lettersFilterObj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/lettersFilterObj.js */ \"./src/javascript/App/lettersFilterObj.js\");\n/* harmony import */ var _App_contactsLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App/contactsLoader.js */ \"./src/javascript/App/contactsLoader.js\");\n\n\n\n\nconst lettersFilter = new _App_lettersFilterObj_js__WEBPACK_IMPORTED_MODULE_1__[\"lettersFilterObj\"](_Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nlettersFilter.displayLettersFilter();\n\n_App_contactsLoader_js__WEBPACK_IMPORTED_MODULE_2__[\"contactsLoaderObj\"].displayContacts(_Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst addLtlBtn = document.querySelector('#add-btn');\naddLtlBtn.addEventListener('click', () =>{\n    // console.log('I am trying to go to another page')\n    window.location.href = './newContact.html';\n});\n\n//# sourceURL=webpack:///./src/javascript/script.js?");

/***/ })

/******/ });