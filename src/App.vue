<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    return {
      count,
    };
  },
};
</script>

<template>
  <div class="counter-wrapper">
    <h1>Plugin 03</h1>
    <h2>{{ count }}</h2>
    <div class="buttons-wrapper">
      <button @click="count--">Decrease</button>
      <button @click="count++">Increase</button>
    </div>
    <poc-button>[PLUGIN] Button from NPM Package</poc-button>
  </div>
</template>

<style scoped>
.counter-wrapper {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #2e7d32;
  color: white;
  padding: 2rem;
}
</style>
