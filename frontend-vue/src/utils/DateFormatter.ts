const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function formatDate(datestring: string): string {
    const date: Date = new Date(datestring)

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const dateNum = date.getDate();
    const hour = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);

    return `${month} ${dateNum}, ${year}, ${day}, ${hour}:${minutes}`;
}