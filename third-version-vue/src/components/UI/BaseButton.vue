<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'mode']
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  font-family: inherit;
  background-color: #E60000;
  border: 1px solid #E60000;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #800020;
  border-color: #800020;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
