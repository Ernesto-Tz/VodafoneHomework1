<template>
  <div>
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import tempContacts from "./utils/contacts.js";
import TheHeader from "./components/UI/TheHeader.vue";
import TheFooter from './components/UI/TheFooter.vue'

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      contacts: tempContacts
    };
  },
  provide() {
    return {
      contacts: this.contacts,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  background-color: white;
  margin: 0;
}
</style>
