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

/***/ "./src/javascript/Utility/contacts.js":
/*!********************************************!*\
  !*** ./src/javascript/Utility/contacts.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n    { 'name' : 'Kiss Bence',\n      'phone': '3670303030',\n      'email': 'bence.kiss@vodafone.com'  \n    },\n    { 'name' : 'Kovacs Ibolya',\n      'phone': '3670404040',\n      'email': 'ibolya.kovacs@vodafone.com'\n    },\n    { 'name' : 'Nagy David',\n      'phone': '3670505050',\n      'email': 'david.nagy@vodafone.com'\n    },\n    { 'name' : 'Apro Balint',\n      'phone': '3670606060',\n      'email': 'balint.apro@vodafone.com'\n    },\n    { 'name' : 'Ernesto Tzompantzi',\n      'phone': '3670707070',\n      'email': 'tzompantzi.ernesto@vodafone.com'\n    },\n    {'name' : 'Nagy Renata',\n    'phone': '3670808080',\n    'email': 'renata.nagy@vodafone.com'\n    },\n    { 'name' : 'David Zoltan',\n      'phone': '3670909090',\n      'email': 'zoltan.david@vodafone.com'\n    },\n    {'name' : 'Toth Tomas',\n    'phone': '3671010100',\n    'email': 'tomas.toth@vodafone.com'\n    },\n    {'name' : 'Fodor Bernadett',\n    'phone': '3671111110',\n    'email': 'bernadett.fodor@vodafone.com'\n    },\n  ]);\n\n// {\n//     \"contact001\": {\n//         \"name\" : \"Kiss Bence\",\n//         \"phone\": \"3670303030\",\n//         \"email\": \"bence.kiss@vodafone.com\"\n//     },\n//     \"contact002\": {\n//         \"name\" : \"Kovacs Ibolya\",\n//         \"phone\": \"3670404040\",\n//         \"email\": \"ibolya.kovacs@vodafone.com\"\n//     },\n//     \"contact003\": {\n//         \"name\" : \"Nagy David\",\n//         \"phone\": \"3670505050\",\n//         \"email\": \"david.nagy@vodafone.com\"\n//     },\n//     \"contact004\": {\n//         \"name\" : \"Apro Balint\",\n//         \"phone\": \"3670606060\",\n//         \"email\": \"balint.apro@vodafone.com\"\n//     },\n//     \"contact005\": {\n//         \"name\" : \"Ernesto Tzompantzi\",\n//         \"phone\": \"3670707070\",\n//         \"email\": \"tzompantzi.ernesto@vodafone.com\"\n//     },\n//     \"contact006\": {\n//         \"name\" : \"Nagy Renata\",\n//         \"phone\": \"3670808080\",\n//         \"email\": \"renata.nagy@vodafone.com\"\n//     },\n//     \"contact007\": {\n//         \"name\" : \"David Zoltan\",\n//         \"phone\": \"3670909090\",\n//         \"email\": \"zoltan.david@vodafone.com\"\n//     },\n//     \"contact008\": {\n//         \"name\" : \"Toth Tomas\",\n//         \"phone\": \"3671010100\",\n//         \"email\": \"tomas.toth@vodafone.com\"\n//     },\n//     \"contact009\": {\n//         \"name\" : \"Fodor Bernadett\",\n//         \"phone\": \"3671111110\",\n//         \"email\": \"bernadett.fodor@vodafone.com\"\n//     }\n// }\n\n//# sourceURL=webpack:///./src/javascript/Utility/contacts.js?");

/***/ }),

/***/ "./src/javascript/script.js":
/*!**********************************!*\
  !*** ./src/javascript/script.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility/contacts.js */ \"./src/javascript/Utility/contacts.js\");\n\n\nconsole.log(_Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nfunction createLettersFilter () {\n   const lettersFilter = [];\n   for (var i = 0; i < _Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i++) {\n      if(i == 0){\n         lettersFilter.push(_Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name[0].toUpperCase());\n      }\n      else if (!lettersFilter.includes(_Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name[0].toUpperCase())) {\n         lettersFilter.push(_Utility_contacts_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].name[0].toUpperCase());\n      }\n   }\n   console.log(lettersFilter);\n}\n\ncreateLettersFilter();\n\n//# sourceURL=webpack:///./src/javascript/script.js?");

/***/ })

/******/ });