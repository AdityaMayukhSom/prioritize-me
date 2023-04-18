import { useRef, useMemo } from "react"

// this is only user locally in one single file so I thought of
// putting it together with the same functions where it is being used
interface LoginFormInputPropType {
    type: string,
    icon: string,
    elementName: string,
    labelText: string,
    iconAlternativeText?: string,
    placeholder: string,
    isRequired: boolean
}

export const LoginFormInput = (props: LoginFormInputPropType) => {
    const inputContainer = useRef<HTMLDivElement>(null)

    const borderNormalColor = useMemo(() => 'rgb(37, 99, 235)', [])
    const borderFocusedColor = useMemo(() => 'rgb(229, 231, 235)', [])

    const handleFocus = () => {
        if (inputContainer.current) {
            inputContainer.current.style.borderColor = borderNormalColor
        }
    }
    const handleFocusOut = () => {
        if (inputContainer.current) {
            inputContainer.current.style.borderColor = borderFocusedColor
        }
    }

    return (
        <div ref={inputContainer} className="flex flex-row items-center py-1 border-b-2 border-gray-200">
            <img
                src={props.icon}
                alt={props.iconAlternativeText || 'this is an alternative text'}
                className='h-5 mx-1 '
            />
            <input
                name={props.elementName}
                defaultValue=''
                autoComplete="false"
                onFocus={handleFocus}
                onBlur={handleFocusOut}
                className="w-full px-1 rounded-sm outline-none placeholder:text-xs"
                required={props.isRequired}
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    )
};