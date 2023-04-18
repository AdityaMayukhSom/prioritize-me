import { DELETE_TODO_BY_ID_URL } from "../config";

export async function deleteTodoByID(todoID: number): Promise<number> {
    const deleteRequestURL: string = DELETE_TODO_BY_ID_URL + todoID;
    const res = await fetch(deleteRequestURL, {
        method: 'DELETE'
    });
    return res.status;
}