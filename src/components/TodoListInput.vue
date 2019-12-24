<template>
  <div class="input">
    <input
        type="text"
        placeholder="할 일을 입력해주세요"
        v-model="text"
    >
    <button @click="add">할일추가</button>
  </div>
</template>

<script>
  export default {
    name: "TodoListInput",
    data() {
      return {
        text: ''
      }
    },
    methods: {
      add() {
        if (this.text === '') {
          alert('할 일을 입력해 주세요');
          return;
        }
        this.$emit('add', this.text);
        this.text = '';
      }
    }
  }
</script>

<style scoped>

</style>
