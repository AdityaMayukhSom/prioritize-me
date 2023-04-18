<script lang="ts">
import TodoForm from './TodoForm.vue';
export default {
	data: function () {
		return {};
	},
	components: {
		TodoForm,
	},
	emits: {
		closeTodoInputForm() {
			return true;
		},
	},
};
</script>

<template>
	<div id="todo-form-background" @click.stop="$emit('closeTodoInputForm')">
		<TodoForm />
	</div>
</template>

<style>
#todo-form-background {
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 10;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
