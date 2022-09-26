<template>
  <div class="container">
    <contact-card
      v-for="contact in contacts"
      :key="contact.name"
      :name="contact.name"
      :phone="contact.phone"
      :email="contact.email"
    ></contact-card>
  </div>
</template>

<script>
import ContactCard from "./ContactCard.vue";

export default {
  components: {
    ContactCard,
  },
  inject: ["contacts"],
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
</style>
