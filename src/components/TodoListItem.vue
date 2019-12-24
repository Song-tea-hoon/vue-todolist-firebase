<template>
  <li>
    <input
        type="checkbox"
        :checked="done"
        @change="onChange"
    >
    <span :class="{'is-done': done }">{{text}}</span>
    <button @click="deleteClick">X</button>
  </li>
</template>

<script>
  export default {
    name: "TodoListItem",
    props: ['itemData'],
    computed: {
      done() {
        return this.itemData.done;
      },
      id() {
        return this.itemData.id;
      },
      text() {
        return this.itemData.text;
      }
    },
    methods: {
      deleteClick() {
        this.$emit('delete', this.id);
      },
      onChange() {
        this.$emit('update', {id: this.id, value: !this.done});
      }
    }
  }
</script>

<style scoped>

</style>
