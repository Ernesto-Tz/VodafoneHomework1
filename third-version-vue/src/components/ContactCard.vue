<template>
  <transition @before-enter="BeforeEnter" mode="out-in">
    <div class="col-lg-4 col-md-6 contact" v-if="showing">
      <router-link class="contact-name" :to="'/contacts/details/' + id">
        {{ name }}
      </router-link>
      <div class="contact-info">
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["id", "name", "email", "phone", "showing"],
  methods: {
    // beforeEnter(el) {
    //   el.style.opacity = 0;
    // },
    // enter(el, done) {
    //   let round = 1;
    //   const interval = setInterval(function () {
    //     el.style.opacity = round * 0.1;
    //     round++;
    //     if (round > 10) {
    //       clearInterval(interval);
    //       done();
    //     }
    //   }, 20);
    // },
    // leave(el, done) {
    //   let round = 10;
    //   const interval = setInterval(function () {
    //     el.style.opacity = round * 0.1;
    //     round--;
    //     if (round < 1) {
    //       clearInterval(interval);
    //       done();
    //     }
    //   }, 20);
    // },
  },
};
</script>

<style scoped>
.contact {
  display: inline-block;
  transition: transform 250ms ease-out;
}

.contact-name {
  text-decoration: none;
  display: inline-block;
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

.contact:hover {
  transform: translateY(-5px);
}
.v-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: all 0.3s ease-in;
}
.v-leave-to {
  opacity: 0;
}
</style>
