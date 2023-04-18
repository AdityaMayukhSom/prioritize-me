<script lang="ts">
export default {
	props: {
		alternateText: {
			type: String,
			default: '',
		},
		imageFileName: {
			type: String,
			required: true,
		},
		todoID: {
			type: Number,
			required: true,
		},
	},
	emits: {
		click: null,
		deleteTodo: (todoID: number) => {
			return todoID > 0;
		},
	},
};
</script>

<template>
	<button class="todo-list-item-control-button" @click="$emit('deleteTodo', this.todoID)">
		<img class="svg-btn" :src="'./' + this.imageFileName" :alt="this.alternateText" />
	</button>
</template>

<style scoped>
.todo-list-item-control-button {
	align-items: center;
	background-color: transparent;
	border: 1px solid;
	border-color: rgba(209, 213, 219, 1);
	border-radius: 0.125rem;
	border-width: 1px;
	display: flex;
	height: 1.75rem;
	justify-content: center;
	cursor: pointer;
	width: 1.75rem;
}

.svg-btn {
	height: 1.25rem;
}

@media (min-width: 768px) {
	.todo-list-item-control-button {
		height: 2.25rem;
		width: 2.25rem;
	}

	.svg-btn {
		height: 1.5rem;
	}
}
</style>
