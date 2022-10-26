import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import ContactsList from './components/ContactsList.vue'
import ContactDetails from './components/ContactDetails.vue'
import ContactEdit from './components/ContactEdit.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/contacts', component: ContactsList},
    { path: '/contacts/details/:contactId', component: ContactDetails, props: true},
    { path: '/contacts/edit/:contactId', component: ContactEdit, props: true}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
