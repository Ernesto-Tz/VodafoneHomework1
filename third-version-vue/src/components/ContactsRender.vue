<template>
  <div>
    <title-bar v-if="!contactSelected" @filtering="filterSelected"></title-bar>
    <contacts-stored
      v-if="!contactSelected"
      @contact-selected="contactDetails"
    ></contacts-stored>
    <contact-details v-if="contactSelected"
    :name="selectedContact.name"
    :phone="selectedContact.phone"
    :email="selectedContact.email"></contact-details>
    <button type="button" class="btn add-btn" v-if="!contactSelected">+</button>
  </div>
</template>

<script>
import tempContacts from "../utils/contacts.js";
import TitleBar from "./TitleBar.vue";
import ContactsStored from "./ContactsStored.vue";
import ContactDetails from "./ContactDetails.vue";

export default {
  components: {
    TitleBar,
    ContactsStored,
    ContactDetails,
  },
  data() {
    return {
      contacts: tempContacts,
      // contactsToRender: [],
      contactSelected: false,
      selectedContact: {}
    };
  },
  provide() {
    return {
      contacts: this.contacts,
    };
  },
  methods: {
    filterSelected(letter) {
      console.log(letter);
      this.contacts.forEach((el) => {
        if (el.name[0].toUpperCase() === letter) {
          el.showing = true;
        } else {
          el.showing = false;
        }
      });
    },
    contactDetails(id) {
      this.contactSelected = true;
      this.selectedContact = this.contacts.find(el => el.id === id);
    },
    // initContactsRendered() {
    //   this.contacts.forEach((e) => {
    //     this.includeContact(e);
    //   });
    // },
    // includeContact(contact) {
    //   let vm = this;
    //   vm.$set(this.contactsToRender, contact.name, {
    //     id: contact.id,
    //     name: contact.name,
    //     phone: contact.phone,
    //     email: contact.email,
    //     showing: contact.showing,
    //   });
    // },
  },
  // created(){
  //   this.initContactsRendered();
  // }
};
</script>

<style scoped>
div {
  margin: 20px auto;
}

.add-btn{
  background-color: red;
  color: white;
  text-align: center;
  font-size: 20px;
  position: fixed;
  bottom: 7rem;
  right: 7rem;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}
</style>
