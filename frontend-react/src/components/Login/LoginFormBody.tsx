import React, { useContext } from 'react'
import { LoginFormInput } from './LoginFormInput'
import { UserContext } from '../Providers/UserContext'
import UserIcon from '../../assets/user.svg'
import LockIcon from '../../assets/lock.svg'
export const LoginFormBody = () => {
    const { setUser } = useContext(UserContext)
    const handleLoginFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const loginData = new FormData(event.currentTarget)
        console.log(loginData.get('email'))
        console.log(loginData.get('password'))
    }
    return (
        <div id="login-form-body" className="px-6 pt-6 pb-8 bg-white">
            <form
                className='flex flex-col w-full gap-y-3'
                method='POST'
                id='login-input-form'
                name='login-input-form'
                onSubmit={handleLoginFormSubmit}
            >
                <LoginFormInput
                    icon={UserIcon}
                    labelText='Email'
                    elementName='email'
                    placeholder="username"
                    type="email"
                    isRequired={true}
                />
                <LoginFormInput
                    icon={LockIcon}
                    labelText="Password"
                    elementName='password'
                    placeholder="password"
                    type="password"
                    isRequired={true}

                />
            </form>

            <div className="flex w-full px-1 py-2">
                <a href="/forgot-password" className="text-xs font-semibold text-gray-400 underline ">Forgot Password?</a>
            </div>

            <button
                className="bg-gradient-to-r from-blue-600 to-violet-600 text-white w-full py-1.5 rounded-full my-2 font-medium drop-shadow-lg"
                type='submit'
                form='login-input-form'
            >
                Log In
            </button>

            <div
                className="pt-2 text-xs text-center drop-shadow-md">
                <span>New to <b className=''>Calendry</b>? </span>
                <a href="/signup" className="font-medium text-blue-700 underline underline-current">SignUp</a> instead.
            </div>
        </div >
    )
}