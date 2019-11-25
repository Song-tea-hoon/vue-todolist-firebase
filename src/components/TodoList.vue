<template>
    <div>
        <h2>TodoList</h2>
        <ul>
            <TodoListItem
                    v-for="item in list"
                    :item-data="item"
                    :key="item.id"
                    @deleteclick="deleteList"
                    @checkchange="checkList"
            />
        </ul>
        <TodoListInput @addclick="addList"/>
    </div>
</template>

<script>
    import TodoListInput from "./TodoListInput";
    import TodoListItem from "./TodoListItem";
    import {addTodo, deleteTodo, getTodo, updateTodo} from "../api/api";

    export default {
        name: "TodoList",
        components: {
            TodoListItem,
            TodoListInput
        },
        data() {
            return {
                id: 2,
                list: [
                    // {id:0, text: '밥먹기', done: true}
                ]
            }
        },
        mounted() {
            this.renderList();
        },
        methods: {
            renderList() {
                getTodo()
                    .then(res => {
                        // getter로 변환해도 될듯...
                        this.list = res ?  Object.entries(res).map(item => item[1]) : [];
                    })
            },
            addList(val) {
                addTodo(val)
                    .then(res => this.renderList());
            },
            deleteList(id) {
                deleteTodo(id)
                    .then(res => this.renderList());
            },
            checkList(val) {
                const {id, value} = val;
                updateTodo(id, val)
                    .then(res => this.renderList());
            }
        }
    }
</script>

<style scoped>

</style>
