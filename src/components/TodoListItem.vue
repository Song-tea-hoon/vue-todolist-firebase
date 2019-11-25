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
        name: "TodoListItem",
        props:['itemData'],
        data() {
            return {
                id: this.itemData.id,
                done: this.itemData.done,
                text: this.itemData.text
            }
        },
        methods: {
            deleteClick() {
                this.$emit('deleteclick', this.id);
            },
            onChange(e) {
                this.$emit('checkchange', {id:this.id, value: this.done});
            }
        }
    }
</script>

<style scoped>

</style>
