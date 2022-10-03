<template>
  <div class="col-md-4 contact" v-if="showing">
    <div class="contact-name">
      {{ name }}
    </div>
    <div class="contact-info">
      <p>{{ email }}</p>
      <p>{{ phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "email", "phone", "showing"],
};
</script>

<style scoped>
.contact {
  display: inline-block;
}

.contact-name {
  background-color: black;
  color: white;
  height: 40px;
  width: 300px;
  margin: 25px 50px 0px 50px;
  padding-top: 5px;
  text-align: center;
  font-size: medium;
  box-shadow: 2px 2px 5px 1px #888888;
  cursor: pointer;
}
.contact-info {
  background-color: white;
  color: black;
  height: 80px;
  width: 300px;
  margin: 0px 50px 10px 50px;
  padding-top: 15px;
  text-align: center;
  font-size: 13px;
  box-shadow: 2px 2px 5px 1px #888888;
}
</style>
