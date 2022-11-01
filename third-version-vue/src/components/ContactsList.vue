<template>
  <div>
    <title-bar></title-bar>
    <div class="container">
      <contact-card
        v-for="contact in contacts"
        :key="contact.id"
        :id="contact.id"
        :name="contact.name"
        :phone="contact.phone"
        :email="contact.email"
        :showing="contact.showing"
      ></contact-card>
    </div>
    <router-link class="add-btn" to='/contacts/add'>+</router-link>
  </div>
</template>

<script>
import TitleBar from "./TitleBar.vue";
import ContactCard from "./ContactCard.vue";

export default {
  components: {
    TitleBar,
    ContactCard,
  },
  inject: ["contacts"],
  methods: {
    // contactDetails(id) {
    //   this.contactSelected = true;
    //   this.selectedContact = this.contacts.find((el) => el.id === id);
    //   // selectedContact is just a pointer the actual contact inside the array.
    // },
    // deleteContact() {
    //   const index = this.contacts.indexOf(this.selectedContact);
    //   this.contacts.splice(index, 1);
    //   this.selectedContact = {};
    //   this.contactSelected = false;
    //   this.contacts.forEach((el) => {
    //     el.showing = true;
    //   });
    // },
    // editContactView() {
    //   this.editContact = true;
    //   this.contactSelected = false;
    // },
  },
};
</script>

<style scoped>
div {
  margin: 20px auto;
}
.container {
  margin: 0 auto;
}
.add-btn {
  text-decoration: none;
  display: inline-block;
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
