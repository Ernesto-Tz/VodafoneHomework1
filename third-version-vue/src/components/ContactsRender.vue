<template>
  <div>
    <title-bar v-if="!contactSelected" @filtering="filterSelected"></title-bar>
    <contacts-stored></contacts-stored>
    <contact-details v-if="contactSelected"></contact-details>
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
      this.contacts.forEach(el => {
        if(el.name[0].toUpperCase() === letter) {
          el.showing = true;
        } else {
          el.showing = false;
        }
      });
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
</style>
