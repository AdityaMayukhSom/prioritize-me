import { LoginFormBody } from './LoginFormBody';
import { LoginFormTitle } from './LoginFormTitle';

export const LoginForm = () => (
    <div id='login-form' className='overflow-hidden rounded-md drop-shadow-2xl'>
        <LoginFormTitle />
        <LoginFormBody />
    </div>
);
