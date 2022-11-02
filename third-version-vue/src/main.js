import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import ContactsList from './components/ContactsList.vue'
import ContactDetails from './components/ContactDetails.vue'
import ContactEdit from './components/ContactEdit.vue'
import AddContact from './components/AddContact.vue'
import ErrorAlert from './components/UI/ErrorAlert.vue'
import BaseButton from './components/UI/BaseButton.vue'
import NotFound from './components/UI/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/contacts'},
    { path: '/contacts', component: ContactsList},
    { path: '/contacts/details/:contactId', component: ContactDetails, props: true},
    { path: '/contacts/edit/:contactId', component: ContactEdit, props: true},
    { path: '/contacts/add', component: AddContact},
    { path: '/:notFound(.*)', component: NotFound},
  ]
});

const app = createApp(App);
app.use(router);
app.component('base-button', BaseButton);
app.component('error-alert', ErrorAlert);
app.mount('#app');
