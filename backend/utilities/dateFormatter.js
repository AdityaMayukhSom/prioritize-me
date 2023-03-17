const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/**
 * Formats a JavaScript Date object into a human-readable string.
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
function formatDate(date) {
    if (!date) {
        return ''
    }
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = days[date.getDay()];
    const dateNum = date.getDate();
    const hour = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${month} ${dateNum}, ${year}, ${day}, ${hour}:${minutes}`;
}

module.exports = { formatDate }