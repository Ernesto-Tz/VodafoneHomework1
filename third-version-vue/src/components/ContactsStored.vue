<template>
  <ul>
  </ul>
</template>

<script>
import tempContacts from "../utils/contacts.js";

export default {
  data() {
    return {
      contacts: tempContacts,
    };
  },
  methods: {
    showCont() {
      this.contacts.forEach((e) => {
        console.log(e.name);
      });
    },
  },
  mounted() {
    this.showCont();
  },
};
</script>

<style scoped>

</style>