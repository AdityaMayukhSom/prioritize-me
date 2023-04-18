import { ALL_TODO_URL } from "../config";

export async function getTodos(): Promise<Todo[]> {
    const res = await fetch(ALL_TODO_URL, { method: 'GET' })
    const fetchedTodos = await res.json() as Todo[];
    return fetchedTodos;
}