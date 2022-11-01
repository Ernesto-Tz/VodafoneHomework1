<template>
  <header class="row">
    <div class="col-md-6">
      <router-link to="/contacts">
        <img
          class="logo"
          src="../../assets/vodafone_logo.svg"
          alt="vodafone_logo"
        />
      </router-link>
    </div>
    <div class="col-md-6 float-right">
      <input
        class="form-control"
        type="text"
        name="search"
        placeholder="Search for name"
      />
    </div>
  </header>
</template>

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
