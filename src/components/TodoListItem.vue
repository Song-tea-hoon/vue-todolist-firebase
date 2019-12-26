<template>
  <li>
    <input
        type="checkbox"
        v-model="done"
        @change="onChange"
    >
    <span :class="{'is-done': done}">{{text}}</span>
    <button @click="deleteClick">X</button>
  </li>
</template>

<script>
  export default {
    props:['itemData'],
    data() {
      return {
        done : this.itemData.done,
        id : this.itemData.id,
        text : this.itemData.text
      }
    },
    watch: {
      itemData(newVal) {
        this.$nextTick()
          .then(() => {
            this.done = newVal.done;
          })
      }
    },
    methods: {
      deleteClick() {
        this.$emit('delete', this.id);
      },
      onChange(e) {
        this.$emit('update', {id:this.id, value: this.done});
      }
    }
  }
</script>

<style>

</style>
