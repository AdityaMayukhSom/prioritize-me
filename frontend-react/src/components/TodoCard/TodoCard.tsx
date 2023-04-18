import { MouseEvent } from "react"
import { DateTimeView } from "./DateTimeView"
import DeleteIcon from '../../assets/delete.svg'
import EditIcon from '../../assets/edit.svg'

export const TodoCard = ({ todoItem, deleteTodoByID }: {
    todoItem: Todo,
    deleteTodoByID: (todoID: number) => Promise<void>
}) => {

    const titleStyles: string = `font-medium py-1 drop-shadow-lg ${todoItem.todoDescription ? `text-2xl` : `text-3xl`}`

    function handleDeleteButtonCLick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        deleteTodoByID(todoItem.todoID);
    }

    return (
        <div className="grid bg-white rounded-md shadow-sm px-4 sm:px-8 py-3 sm:py-5 my-3 w-full sm:w-3/4 mx-auto max-w-6xl">
            <section className="flex justify-between">
                <span className={`font-medium py-1 drop-shadow-lg ${todoItem.todoDescription ? `text-base sm:text-xl md:text-2xl` : `text-lg sm:text-2xl md:text-3xl`}`}>
                    {todoItem.todoTitle}
                </span>
                <span className="flex flex-row gap-x-1">
                    <button className='svg-btn'>
                        <img src={EditIcon} alt="edit button" className="h-5 md:h-6" />
                    </button>
                    <button className='svg-btn' onClick={handleDeleteButtonCLick}>
                        <img src={DeleteIcon} alt="delete button" className="h-5 md:h-6" />
                    </button>
                </span>
            </section>

            {/* Only loads if todo description is available in the todo */}
            {todoItem.todoDescription && <p className="text-sm sm:text-base md:text-lg">{todoItem.todoDescription}</p>}

            <ul className="py-2 list-none">
                <DateTimeView dataName='todo-creation-time' dateString={todoItem.todoCreationTime} />
                {todoItem.todoDeadline &&
                    <DateTimeView dataName='todo-deadline-time' dateString={todoItem.todoDeadline} />}
                {todoItem.todoCompletionTime &&
                    <DateTimeView dataName='todo-completion-time' dateString={todoItem.todoCompletionTime} />}
            </ul>
        </div>
    )
}