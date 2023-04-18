<script lang="ts">
import Heading from './components/Heading/Heading.vue';
import TodoFormContainer from './components/TodoForm/TodoFormContainer.vue';
import TodoItemsContainer from './components/TodoList/TodoItemsContainer.vue';

let canScroll = true;
let pageCoordinateX: number;
let pageCoordinateY: number;

function scrollEventHandler() {
	window.scrollTo(pageCoordinateX, pageCoordinateY);
}

function handleScrolling() {
	console.log('handle todo form show called');
	if (canScroll) {
		pageCoordinateX = window.scrollX;
		pageCoordinateY = window.scrollY;
		window.addEventListener('scroll', scrollEventHandler);
	} else {
		window.removeEventListener('scroll', scrollEventHandler);
	}
	canScroll = !canScroll;
}

export default {
	data: function () {
		return {
			isTodoFormShow: false,
		};
	},
	components: {
		TodoFormContainer,
		TodoItemsContainer,
		Heading,
	},
	methods: {
		handleTodoFormShow() {
			this.isTodoFormShow = !this.isTodoFormShow;
			handleScrolling();
		},
	},
};
</script>

<template>
	<Heading @open-todo-input-form="handleTodoFormShow" />
	<TodoItemsContainer />
	<TodoFormContainer v-if="isTodoFormShow" @close-todo-input-form="handleTodoFormShow" />
</template>

<style scoped></style>
