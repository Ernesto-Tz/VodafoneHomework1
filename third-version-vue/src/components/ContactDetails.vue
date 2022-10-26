<template>
  <div class="container">
    <div class="col-md-12 text-center">
      <div id="header-title">{{ name }}'s Contact</div>
    </div>
    <div class="underline-contacts"></div>
    <div class="col-md-12 text-center">
      <div class="contact-row">
        <label for="contactName-text" class="contact-Label">Name:</label>
        <div id="contactName-text">{{ name }}</div>
      </div>
      <div class="contact-row">
        <label for="contactEmail-text" class="contact-Label">Phone:</label>
        <div id="contactEmail-text">{{ phone }}</div>
      </div>
      <div class="contact-row">
        <label for="contactPhone-text" class="contact-Label">Email:</label>
        <div id="contactPhone-text">{{ email }}</div>
      </div>
      <div class="crud-btns">
        <button type="button" class="btn deleteContact-Btn">Delete</button>
        <button type="button" class="btn editContact-Btn">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["contacts"],
  props: ["contactId"],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    deleteContact() {
      this.$emit("delete-contact");
    },
    editContact() {
      this.$emit("edit-contact");
    },
    loadContact(contactId) {
      console.log(contactId);
      console.log(this.contacts);
      const selectedContact = this.contacts.find(c => c.id === parseInt(contactId));
      this.name = selectedContact.name;
      this.phone = selectedContact.phone;
      this.email = selectedContact.email;
    },
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

.contact-Label {
  color: grey;
  margin-left: 42%;
  margin-top: 15px;
}

#contactName-text {
  color: black;
  margin-left: 2%;
  margin-top: 15px;
}

#contactEmail-text,
#contactPhone-text {
  color: red;
  margin-left: 2%;
  margin-top: 15px;
}
.contact-row {
  display: flex;
}

.crud-btns {
  margin-top: 30px;
}

.deleteContact-Btn {
  background-color: white;
  color: red;
  border-color: red;
}

.editContact-Btn {
  background-color: white;
  border-color: black;
  margin-left: 2%;
}
</style>
