<script lang="ts">
export default {
	emits: {
		openTodoInputForm() {
			return true;
		},
	},
};
</script>

<template>
	<head id="todo-app-head">
		<h1 id="todo-head-greetings">Welcome Back!</h1>
		<button id="add-todo-button" @click="$emit('openTodoInputForm')">
			<span :style="{fontSize: '20px', paddingRight: '12px'}">+</span>
			Add Todo
		</button>
	</head>
</template>

<style scoped>
#todo-app-head {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 0.2rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 0.75rem;
	max-width: 72rem;
	padding-bottom: 0.2rem;
	padding-top: 0.5rem;
	width: 90%;
}

#todo-head-greetings {
	font-size: 36px;
	font-weight: 500;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
}

#add-todo-button {
	padding-top: 10px;
	padding-bottom: 10px;
	padding-right: 15px;
	padding-left: 15px;
	margin-bottom: 6px;
	width: 100%;
	user-select: none;
	cursor: pointer;
	color: rgb(77, 77, 77);
	background-color: rgb(213, 213, 213);
	border-radius: 0.25rem;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
}

#add-todo-button:hover {
	color: rgb(62, 62, 62);
	background-color: rgb(197, 197, 197);
}

/*
#add-todo-button:active {
	color: rgb(46, 46, 46);
	background-color: rgb(178, 178, 178);
}
*/

@media (min-width: 475px) {
	#todo-app-head {
		flex-direction: row;
		justify-content: space-between;
	}

	#todo-head-greetings {
		font-size: 36px;
	}

	#add-todo-button {
		width: auto;
		margin-bottom: 0;
	}
}

@media (min-width: 640px) {
	#todo-app-head {
		width: 75%;
	}
}
</style>
