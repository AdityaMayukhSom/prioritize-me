<script lang="ts">
import config from '../../config';
import Todo from '../../types/Todo';
import TodoListItem from './TodoListItem.vue';

export default {
	data: function () {
		return {
			todos: [] as Todo[],
		};
	},
	methods: {
		async getAllTodos() {
			let res = await fetch(config.GET_ALL_TODOS_URL);
			const newTodos = await res.json();
			this.todos = newTodos;
		},
	},
	created() {
		this.getAllTodos();
	},
	components: {TodoListItem},
};
</script>

<template>
	<section id="todo-list-items-container">
		<TodoListItem v-for="todo in todos" :key="todo.todoID" :todo-item="todo" />
	</section>
</template>
<style>
#todo-list-items-container {
	padding-bottom: 4rem;
}
</style>
