<template>
  <div>
    <the-header></the-header>
    <title-bar></title-bar>
    <contacts-stored></contacts-stored>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TitleBar from "./components/TitleBar.vue";
import ContactsStored from './components/ContactsStored.vue';
import TheFooter from './components/TheFooter.vue'

export default {
  name: "App",
  components: {
    TheHeader,
    TitleBar,
    ContactsStored,
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
