<template>
  <div>
    <div class="col-md-12 text-center">
      <div id="header-title">Contacts</div>
    </div>
    <div class="underline-contacts"></div>
    <div class="col-md-12 filter-table">
      <div class="filter-element">A</div>
      <div class="filter-element">B</div>
      <div class="filter-element">C</div>
    </div>
  </div>
</template>

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
}
</style>
