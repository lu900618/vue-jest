<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="add">add</button>
    <li v-for="l in list" :key="l">{{ l }}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      list: []
    };
  },
  methods: {
    add() {
      if (this.value) {
        this.list.push(this.value);
      }
    }
  }
};
</script>
