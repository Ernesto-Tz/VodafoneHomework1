<template>
  <div>
    <title-bar v-if="!contactSelected" @filtering="filterSelected"></title-bar>
    <contacts-stored
      v-if="!contactSelected"
      @contact-selected="contactDetails"
    ></contacts-stored>
    <contact-details
      v-if="contactSelected"
      :id="selectedContact.id"
      :name="selectedContact.name"
      :phone="selectedContact.phone"
      :email="selectedContact.email"
      @delete-contact="deleteContact"
      @edit-contact="editContactView"
    ></contact-details>
    <contact-edit
      v-if="editContact"
      :id="selectedContact.id"
      :name="selectedContact.name"
      :phone="selectedContact.phone"
      :email="selectedContact.email"
    ></contact-edit>
    <button type="button" class="btn add-btn" v-if="!contactSelected">+</button>
  </div>
</template>

<script>
import tempContacts from "../utils/contacts.js";
import TitleBar from "./TitleBar.vue";
import ContactsStored from "./ContactsStored.vue";
import ContactDetails from "./ContactDetails.vue";
import ContactEdit from "./ContactEdit.vue";

export default {
  components: {
    TitleBar,
    ContactsStored,
    ContactDetails,
    ContactEdit,
  },
  data() {
    return {
      contacts: tempContacts,
      contactSelected: false,
      selectedContact: {},
      editContact: false,
    };
  },
  provide() {
    return {
      contacts: this.contacts,
    };
  },
  methods: {
    filterSelected(letter) {
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
      this.selectedContact = this.contacts.find((el) => el.id === id);
      // selectedContact is just a pointer the actual contact inside the array.
    },
    deleteContact() {
      const index = this.contacts.indexOf(this.selectedContact);
      this.contacts.splice(index, 1);
      this.selectedContact = {};
      this.contactSelected = false;
      this.contacts.forEach((el) => {
        el.showing = true;
      });
    },
    editContactView() {
      this.editContact = true;
      this.contactSelected = false;
    },
  },
};
</script>

<style scoped>
div {
  margin: 20px auto;
}

.add-btn {
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
