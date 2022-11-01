<template>
  <div>
    <teleport to="body">
      <error-alert
        v-if="deleteClicked"
        title="Delete Contact"
        @close="confirmDelete"
      >
        <template #default>
          <p>Are you sure you want to delete this contact?</p>
        </template>
        <template #actions>
          <base-button @click="confirmDelete">Delete</base-button>
          <base-button class="cancel" @click="cancelDelete">Cancel</base-button>
        </template>
      </error-alert>
    </teleport>
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
          <button type="button" class="btn deleteContact-Btn" @click="deleteContact">Delete</button>
          <button
            type="button"
            class="btn editContact-Btn"
            @click="editContact"
          >
            Edit
          </button>
        </div>
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
      deleteClicked: false
    };
  },
  methods: {
    deleteContact() {
      this.deleteClicked = true;
    },
    cancelDelete() {
      this.deleteClicked = false;
    },
    confirmDelete() {
      const index = this.contacts.findIndex(
        (c) => c.id === parseInt(this.contactId)
      );
      this.contacts.splice(index,1);
      this.$router.push("/contacts");
    },
    loadContact(contactId) {
      const selectedContact = this.contacts.find(
        (c) => c.id === parseInt(contactId)
      );
      this.name = selectedContact.name;
      this.phone = selectedContact.phone;
      this.email = selectedContact.email;
    },
    editContact() {
      this.$router.push("/contacts/edit/" + this.contactId);
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

.cancel{
  background-color: #fff;
  border: 1px solid #000;
  color: #000;
}
.cancel:hover,
.cancel:active {
  background-color: #D3D3D3;
  border-color: #D3D3D3;
}
</style>
