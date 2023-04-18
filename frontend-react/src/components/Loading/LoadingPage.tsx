import { LoadingSpinner } from "./LoadingSpinner"

export const LoadingPage = () => {
    return (
        <div className='flex flex-col justify-center w-screen h-screen items-center bg-light-500 gap-5'>
            <LoadingSpinner />
            <p className='text-center text-lg font-light tracking-wider leading-tight'>Wait Till We<br />Load Your Data</p>
        </div>
    )
}