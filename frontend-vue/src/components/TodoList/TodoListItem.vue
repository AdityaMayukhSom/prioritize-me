<script lang="ts">
import {PropType} from 'vue';
import Todo from '../../types/Todo';
import DateTimeView from './DateTimeView.vue';
import TodoListItemControlButton from './TodoListItemControlButton.vue';
export default {
	props: {
		todoItem: {
			required: true,
			type: Object as PropType<Todo>,
		},
	},
	methods: {
		handleDeleteButtonClick(todoToDeleteID: number) {
			console.log('delete button clicked on ' + todoToDeleteID);
		},
	},
	components: {
		DateTimeView,
		TodoListItemControlButton,
	},
};
</script>

<template>
	<div class="todo-item-container">
		<section :style="{display: 'flex', justifyContent: 'space-between'}">
			<span
				:class="{
					'todo-title': true,
					'todo-title-with-description': todoItem.todoDescription,
					'todo-title-without-description': !todoItem.todoDescription,
				}"
			>
				{{ todoItem.todoTitle }}
			</span>
			<span :style="{display: 'flex', flexDirection: 'row', columnGap: '0.25rem'}">
				<TodoListItemControlButton :todoID="todoItem.todoID" alternateText="edit button" imageFileName="edit.svg" />
				<TodoListItemControlButton
					:todoID="todoItem.todoID"
					alternateText="delete button"
					imageFileName="delete.svg"
					@delete-todo="handleDeleteButtonClick"
				/>
			</span>
		</section>

		<!-- Only loads if todo description is available in the todo -->
		<p v-if="todoItem.todoDescription" class="todo-description">{{ todoItem.todoDescription }}</p>

		<ul :style="{paddingTop: '0.5rem', paddingBottom: '0.5rem', listStyleType: 'none'}">
			<DateTimeView dataName="todo-creation-time" :dateString="todoItem.todoCreationTime" />
			<DateTimeView v-if="todoItem.todoDeadline" dataName="todo-deadline-time" :dateString="todoItem.todoDeadline" />
			<DateTimeView
				v-if="todoItem.todoCompletionTime"
				dataName="todo-completion-time"
				:dateString="todoItem.todoCompletionTime"
			/>
		</ul>
	</div>
</template>

<style scoped>
.todo-item-container {
	background-color: #ffffff;
	border-radius: 0.375rem;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
	display: grid;
	margin-bottom: 0.75rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 0.75rem;
	max-width: 72rem;
	padding-bottom: 0.75rem;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.75rem;
	width: 90%;
}

.todo-title {
	font-weight: 500;
	padding-bottom: 0.25rem;
	padding-top: 0.25rem;
	text-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
}

.todo-title-with-description {
	font-size: 1rem;
	line-height: 1.5rem;
}

.todo-title-without-description {
	font-size: 1.125rem;
	line-height: 1.75rem;
}

.todo-description {
	font-size: 0.875rem;
	line-height: 1.25rem;
}

@media (min-width: 640px) {
	.todo-item-container {
		padding-bottom: 1.25rem;
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 1.25rem;
		width: 75%;
	}

	.todo-title-with-description {
		font-size: 1.25rem;
		line-height: 1.75rem;
	}

	.todo-title-without-description {
		font-size: 1.5rem;
		line-height: 2rem;
	}

	.todo-description {
		font-size: 1rem;
		line-height: 1.5rem;
	}
}

@media (min-width: 768px) {
	.todo-title-with-description {
		font-size: 1.5rem;
		line-height: 2rem;
	}

	.todo-title-without-description {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}

	.todo-description {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
}
</style>
