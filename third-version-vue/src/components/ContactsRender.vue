<template>
  <div>
    <title-bar></title-bar>
    <contacts-stored></contacts-stored>
  </div>
</template>

<script>
import tempContacts from "../utils/contacts.js";
import TitleBar from "./TitleBar.vue";
import ContactsStored from "./ContactsStored.vue";

export default {
  components: {
    TitleBar,
    ContactsStored,
  },
  data() {
    return {
      contacts: tempContacts,
    };
  },
  provide() {
    return {
      contacts: this.contacts,
    };
  }
};
</script>

<style scoped></style>
