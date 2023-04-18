import { formatDate } from "../../utils/DateFormatter"

interface TextDescription {
    readonly textColor: string,
    readonly textContent: string
}

const TextDescriptions: { readonly [index: string]: TextDescription } = {
    'todo-creation-time': {
        textColor: 'text-blue-700',
        textContent: 'Created'
    }, 'todo-completion-time': {
        textColor: 'text-emerald-500',
        textContent: 'Deadline'
    }, 'todo-deadline-time': {
        textColor: 'text-red-600',
        textContent: 'Completed'
    }
}

export const DateTimeView = ({ dataName, dateString }: {
    dataName: 'todo-creation-time' | 'todo-completion-time' | 'todo-deadline-time'
    dateString: string,
}) => {
    const textDescription: TextDescription = TextDescriptions[dataName];
    return (
        <li className="text-xs sm:text-sm md:text-base" data-name={dataName}>
            <label className={textDescription.textColor}>
                {textDescription.textContent}&nbsp;:&nbsp;
            </label>
            {formatDate(dateString)}
        </li>
    )
}