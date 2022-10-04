<template>
  <div class="container">
    <contact-card
      v-for="contact in contacts"
      :key="contact.id"
      :id="contact.id"
      :name="contact.name"
      :phone="contact.phone"
      :email="contact.email"
      :showing="contact.showing"
      @select-contact="contactSelected"
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
  methods: {
    contactSelected(id){
      this.$emit('contact-selected',id)
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0 auto;
}
</style>
