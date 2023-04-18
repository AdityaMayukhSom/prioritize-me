export const Header = (
    { username, todoCount }: {
        username: string,
        todoCount: number
    }
) => {
    return (
        <header className="w-3/4 mx-auto max-w-6xl text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-medium py-2">
                Welcome back, {username}
            </h1>
            <h2 className="sm:text-xl text-lg pb-2 text-gray-600 ">
                You've got {todoCount} tasks coming up in next days.
            </h2>
        </header>
    )
}