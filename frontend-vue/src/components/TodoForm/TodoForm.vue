<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
export default {
	data: function () {
		return {
			todoTitle: '',
			todoDescription: '',
			todoDeadline: new Date(),
		};
	},
	components: {VueDatePicker},
};
</script>

<template>
	<form method="post" id="todo-input-form" @click.stop="">
		<label for="todo-title" :style="{fontSize: '18px'}">Todo Title :</label>
		<input type="text" name="todo-title" id="todo-title" v-model="todoTitle" />

		<label for="todo-description" :style="{fontSize: '18px'}">Todo Description :</label>
		<textarea type="text" cols="70" rows="8" name="todo-description" id="todo-description" v-model="todoDescription" />

		<label for="todo-deadline" :style="{fontSize: '18px'}">Todo Deadline :</label>
		<VueDatePicker
			v-model="todoDeadline"
			:min-date="new Date()"
			:position="'right'"
			:month-change-on-scroll="false"
			:teleport-center="true"
		/>

		<input type="submit" placeholder="Submit Todo" />
	</form>
</template>

<style>
@import '@vuepic/vue-datepicker/dist/main.css';

#todo-input-form {
	display: flex;
	background-color: white;
	padding: 30px 20px;
	flex-direction: column;
	justify-content: center;
	row-gap: 10px;
}

#todo-title {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

#todo-description {
	width: 100%;
	height: 150px;
	padding: 12px 20px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 4px;
	background-color: #fafafa;
	resize: none;
}

input[type='submit'] {
	width: 100%;
	background-color: #4caf50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

input[type='submit']:hover {
	background-color: #45a049;
}
</style>
