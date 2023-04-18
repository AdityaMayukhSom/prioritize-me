<script lang="ts">
import {formatDate} from '../../utils/DateFormatter';

interface TextDescription {
	readonly textColor: string;
	readonly textContent: string;
}

const textDescriptions: {readonly [index: string]: TextDescription} = {
	'todo-creation-time': {
		/* text-blue-700 */
		textColor: 'rgba(29, 78, 216, 1)',
		textContent: 'Created',
	},
	'todo-completion-time': {
		/* text-emerald-500 */
		textColor: 'rgba(16, 185, 129, 1)',
		textContent: 'Deadline',
	},
	'todo-deadline-time': {
		/* text-red-600 */
		textColor: 'rgba(   220, 38, 38, 1)',
		textContent: 'Completed',
	},
};

export default {
	props: {
		dataName: {
			type: String,
			required: true,
			validator(value: string) {
				return ['todo-creation-time', 'todo-completion-time', 'todo-deadline-time'].includes(value);
			},
		},
		dateString: {
			type: String,
			required: true,
		},
	},
	data: function () {
		return {
			textContent: textDescriptions[`${this.dataName}`].textContent,
			textColor: textDescriptions[`${this.dataName}`].textColor,
		};
	},
	computed: {
		formattedDate() {
			return formatDate(this.dateString);
		},
	},
};
</script>

<template>
	<li class="todo-date-time-container" :data-name="this.dataName">
		<label :style="{color: this.textColor}">{{ this.textContent }}&nbsp;:&nbsp;</label>
		{{ formattedDate }}
	</li>
</template>

<style scoped>
.todo-date-time-container {
	font-size: 0.75rem;
	line-height: 1rem;
}

@media (min-width: 640px) {
	.todo-date-time-container {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
}

@media (min-width: 768px) {
	.todo-date-time-container {
		font-size: 1rem;
		line-height: 1.5rem;
	}
}
</style>
