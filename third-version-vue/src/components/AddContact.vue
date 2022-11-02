<template>
  <div>
    <teleport to="body">
      <error-alert
        v-if="inputError"
        title="Missing Information"
        @close="closeModal"
      >
        <template #default>
          <p>Please enter all the information</p>
        </template>
        <template #actions>
          <base-button @click="closeModal">OK</base-button>
        </template>
      </error-alert>
    </teleport>
    <div class="container">
      <div class="text-center">
        <div class="header-title">Edit Contact</div>
      </div>
      <div class="row">
        <label for="NewName-Input" class="newInputLb col-md-2">Name:</label>
        <input
          type="text"
          name="contactName"
          class="col-md-10 input-cont"
          id="NewName-Input"
          placeholder="Enter Name"
          v-model.trim="name"
        />
      </div>
      <div class="row">
        <label for="NewEmail-Input" class="newInputLb col-md-2">Email:</label>
        <input
          type="text"
          name="contactEmail"
          class="col-md-10 input-cont"
          id="NewEmail-Input"
          placeholder="Enter Email"
          v-model.trim="email"
        />
      </div>
      <div class="row">
        <label for="NewPhone-Input" class="newInputLb col-md-2">Phone:</label>
        <input
          type="text"
          name="contactPhone"
          class="col-md-10 input-cont"
          id="NewPhone-Input"
          placeholder="Enter Phone"
          v-model.trim="phone"
        />
      </div>
      <button id="addContact-Btn" class="btn btn-light" @click="verifyInputs">
        Add Contact
      </button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["contacts"],
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      inputError: false
    };
  },
  methods: {
    verifyInputs(){
      if(this.name === "") {
        this.inputError = true;
      } else if (this.email === ''){
        this.inputError = true;
      } else if (this.phone === ''){
        this.inputError = true;
      } else {
        this.addContact()
      }
    },
    closeModal(){
      this.inputError = false;
    },
    addContact() {
      const newContact = {
        id: this.contacts.length + 1,
        name: this.name,
        email: this.email,
        phone: this.phone,
        showing: true,
      };
      this.contacts.push(newContact);
      this.$router.push("/contacts");
    },
  },
};
</script>

<style scoped>
.header-title {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 2rem;
}
.container {
  margin: 0 auto;
  padding: 1rem 20rem;
}
.input-cont {
  margin: 0.4rem 0;
  padding: 0.5rem;
  border-radius: 5px;
  position: relative;
  border-width: thin;
  width: 25rem;
}

.newInputLb {
  margin: 0.6rem 0;
  padding-left: 0.6rem;
}

#addContact-Btn {
  background-color: white;
  border-color: black;
  margin-left: 35%;
  margin-top: 15px;
}
</style>
