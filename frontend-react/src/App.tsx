import { useEffect, useState, createContext, useContext } from 'react'
import { TodoCard } from './components/TodoCard/TodoCard'
import { Header } from './components/Header/Greetings';
import { LoadingPage } from './components/Loading/LoadingPage';
import { getTodos } from './utils/GetTodos';
import { deleteTodoByID } from './utils/DeleteTodo';
import { LoginPage } from './components/Login/LoginPage';
import { UserContext } from './components/Providers/UserContext';

export default function App() {
	// we are intentionally starting todos with null and not with [] or empty array
	// that is because when comparing !todos for showing the loading screen, if instead
	// we would have initially used empty array, and there were no todos in the database
	// we would have been unable to determine if the fetch request hasn't loaded the todo
	// or fetch has been performed and there is no todo available
	const [todos, setTodos] = useState<Todo[] | null>(null);

	const { user } = useContext(UserContext)

	/** This function is passed to childs and is responsible for deleting todos */
	async function handleDeleteTodo(todoID: number): Promise<void> {
		const responseCode = await deleteTodoByID(todoID);
		if (responseCode === 204) {
			const todosLength: number = todos!.length
			for (let i: number = 0; i < todosLength; i++) {
				if (todos![i].todoID === todoID) {
					setTodos([...todos!.slice(0, i), ...todos!.slice(i + 1, todosLength)])
					break;
				}
			}
		}
	}

	useEffect(() => {
		(async function () {
			const newTodos = await getTodos();
			setTodos(newTodos)
		})();
	}, [])

	if (!user) {
		return <LoginPage />
	} else if (!todos) {
		return <LoadingPage />
	} else {
		return (
			<div className="bg-light-500 p-4 sm:p-8 w-full grid grid-cols-1 justify-center">
				<Header username={user!.username} todoCount={todos.length} />
				<main id='todos-container'>
					{todos.map((todoItem) => <TodoCard todoItem={todoItem} key={todoItem.todoID} deleteTodoByID={handleDeleteTodo} />)}
				</main>
			</div>
		)
	}
}