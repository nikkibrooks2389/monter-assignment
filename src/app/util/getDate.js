export const getDate = (dateTimeString) => {
    const date = new Date(dateTimeString);

    // Get day, month, and year from the date object
    const day = date.getDate();
    const month = date.getMonth() + 1; // Adding 1 to get month index starting from 1
    const year = date.getFullYear();

    // Concatenate day, month, and year with dots
    return `${day}.${month}.${year}`;
};