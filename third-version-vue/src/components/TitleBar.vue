<template>
  <div>
    <div class="col-md-12 text-center">
      <slot>
        <div id="header-title">Contacts</div>
      </slot>
    </div>
    <div class="underline-contacts"></div>
    <div class="col-md-12 filter-table">
      <div class="filter-element" v-for="letter in lettersArray" :key="letter" @click="filtering(letter)">
        {{ letter }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["contacts"],
  data() {
    return {
      lettersArray: [],
    };
  },
  methods: {
    createFilterArray() {
      for (var i = 0; i < this.contacts.length; i++) {
        if (i == 0) {
          this.lettersArray.push(this.contacts[i].name[0].toUpperCase());
        } else if (
          !this.lettersArray.includes(this.contacts[i].name[0].toUpperCase())
        ) {
          this.lettersArray.push(this.contacts[i].name[0].toUpperCase());
        }
      }
      this.lettersArray.sort();
    },
    filtering(letter) {
      this.contacts.forEach((el) => {
        if (el.name[0].toUpperCase() === letter) {
          el.showing = true;
        } else {
          el.showing = false;
        }
      });
    }
  },
  mounted() {
    this.createFilterArray();
  },
};
</script>

<style scoped>
#header-title {
  font-size: 40px;
  font-weight: 600;
}
.underline-contacts {
  content: "";
  height: 3px;
  width: 5%;
  background-color: red;
  margin-left: 48%;
}
.filter-table {
  font-size: 30px;
  margin-top: 10px;
  padding-left: 35%;
  font-weight: 400;
  visibility: visible;
  display: flex;
}
.filter-element {
  margin-right: 3rem;
  cursor: pointer;
  transition: color 200ms ease-out;
}

.filter-element:hover {
  color: red;
}
</style>
