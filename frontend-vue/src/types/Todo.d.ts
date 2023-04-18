interface Todo {
    todoID: number,
    todoTitle: string,
    todoDescription: string,
    todoCreationTime: string,
    todoDeadline: string | null,
    todoIsPending: boolean,
    todoCompletionTime: string | null
}

export default Todo