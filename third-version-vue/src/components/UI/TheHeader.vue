<template>
  <header class="row">
    <div class="col-md-6">
      <img
        class="logo"
        src="../../assets/vodafone_logo.svg"
        alt="vodafone_logo"
        @click="reloadAllContacts"
      />
    </div>
    <div class="col-md-6 float-right">
      <input
        class="form-control"
        type="text"
        name="search"
        placeholder="Search for name"
        v-model="searchInput"
      />
    </div>
  </header>
</template>

<script>
export default {
  inject: ["contacts"],
  data(){
    return{
      searchInput: ''
    }
  },
  methods: {
    reloadAllContacts() {
      for(const contact of this.contacts) {
        contact.showing = true;
      }
      this.$router.push("/contacts");
    },
    searching(){
      for (const contact of this.contacts) {
        const contName = contact.name.toLowerCase();
        if(contName.includes(this.searchInput.toLowerCase())){
          contact.showing = true;
        } else {
          contact.showing = false;
        }
      }
    }
  },
  watch: {
    searchInput() {
      this.searching();
    }
  },
  created() {
    this.searching();
  }
};
</script>

<style scoped>
header {
  padding: 2rem;
  width: 100%;
  max-height: 150px;
}

@media only screen and (max-width: 600px) {
  .logo {
    width: 150px;
    height: 60px;
    position: relative;
    left: 40px;
    bottom: 5px;
  }
}

.logo {
  width: 250px;
  height: 100px;
  position: relative;
  left: 40px;
  bottom: 5px;
  cursor: pointer;
}

input {
  margin-top: 5%;
  margin-right: 10%;
  margin-bottom: 15px;
  width: 75%;
  /* padding: 8px; */
  /* border-radius: 5px; */
  /* position: relative; */
  /* border-width: thin; */
}
</style>
