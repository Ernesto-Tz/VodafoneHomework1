<template>
  <div>
    <the-header></the-header>
    <contacts-render></contacts-render>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ContactsRender from "./components/ContactsRender.vue";
import TheFooter from './components/TheFooter.vue'

export default {
  name: "App",
  components: {
    TheHeader,
    ContactsRender,
    TheFooter
  }
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
