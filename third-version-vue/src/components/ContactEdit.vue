<template>
  <div class="container">
    <div class="col-md-12 text-center">
      <div id="header-title">Edit Contact</div>
    </div>
    <div class="underline-contacts"></div>
    <div class="col-md-12 text-center">
      <div class="contact-row">
        <label for="editName-Input" class="contact-Label">Name:</label>
        <input type="text" id="editName-Input" v-model="contactName">
      </div>
      <div class="contact-row">
        <label for="editName-Input" class="contact-Label">Phone:</label>
        <input type="text" id="editName-Input" v-model="contactPhone">
      </div>
      <div class="contact-row">
        <label for="editName-Input" class="contact-Label">E-mail:</label>
        <input type="text" id="editName-Input" v-model="contactEmail">
      </div>
      <div class="crud-btns">
        <button type="button" class="btn saveContact-Btn" @click="saveContact">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["contacts"],
  props: ["contactId"],
  data(){
    return {
      contactName: '',
      contactEmail: '',
      contactPhone: ''
    }
  },
  methods: {
    loadContact(contactId) {
      const selectedContact = this.contacts.find(c => c.id === parseInt(contactId));
      this.contactName = selectedContact.name;
      this.contactPhone = selectedContact.phone;
      this.contactEmail = selectedContact.email;
    },
    saveContact() {
      const selectedContact = this.contacts.find(c => c.id === parseInt(this.contactId));
      selectedContact.name = this.contactName;
      selectedContact.phone = this.contactPhone;
      selectedContact.email = this.contactEmail;
      this.$router.push('/contacts');
    }
  },
  created() {
    this.loadContact(this.contactId);
  },
};
</script>

<style scoped>
#header-title {
  font-size: 40px;
  font-weight: 600;
}
.underline-contacts {
  content: "";
  height: 3px;
  width: 5%;
  background-color: red;
  margin-left: 48%;
}
.container {
  margin: 0 auto;
}
.contact-row {
  display: flex;
}

.contact-Label {
  color: grey;
  margin-left: 42%;
  margin-top: 15px;
}

#editName-Input,
#editEmail-Input,
#editPhone-Input {
  width: 25%;
  height: 5%;
  margin-left: 2%;
  margin-top: 15px;
  padding: 7px;
  border-radius: 5px;
  position: relative;
  border-width: thin;
}

.crud-btns {
  margin-top: 30px;
}
.saveContact-Btn {
  background-color: white;
  border-color: black;
}
</style>
