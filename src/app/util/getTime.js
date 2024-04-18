export const getTime = (dateTimeString) => {
    const date = new Date(dateTimeString);

    // Format time in 24-hour format
    const timeString = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

    // Determine  AM or PM based on the hour value
    const hour = date.getHours();
    const period = hour >= 12 ? 'PM' : 'AM';

    // Concatenate time string with AM or PM
    return `${timeString} ${period}`;
};