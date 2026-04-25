//date

let myDate = new Date(); //current date and time
// console.log(myDate); // Wed Jun 19 2024 12:34:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toString()) // Wed Jun 19 2024 12:34:56 GMT+0000 (Coordinated Universal Time) - toString() method returns a string representation of the date and time in a human-readable format.
// console.log(myDate.toDateString()) // Wed Jun 19 2024 - toDateString() method returns a string representation of the date portion of the date and time in a human-readable format.
// console.log(myDate.toTimeString()) // 12:34:56 GMT+0000 (Coordinated Universal Time) - toTimeString() method returns a string representation of the time portion of the date and time in a human-readable format.
// console.log(myDate.toLocaleString()) // 6/19/2024, 12:34:56 PM - toLocaleString() method returns a string representation of the date and time in a format that is appropriate for the user's locale. The exact format may vary depending on the user's location and settings.
// console.log(myDate.toLocaleDateString()) // 6/19/2024 - toLocaleDateString() method returns a string representation of the date portion of the date and time in a format that is appropriate for the user's locale. The exact format may vary depending on the user's location and settings.
// console.log(myDate.toLocaleTimeString()) // 12:34:56 PM - toLocaleTimeString() method returns a string representation of the time portion of the date and time in a format that is appropriate for the user's locale. The exact format may vary depending on the user's location and settings.

// console.log(myDate.getFullYear()) // 2024 - getFullYear() method returns the year of the date as a four-digit number.
// console.log(myDate.getMonth()+1) // 6 - getMonth() method returns the month of the date as a zero-based index (0 for January, 1 for February, ..., 11 for December). In this case, it will return 6, which corresponds to June.
// console.log(myDate.getDate()) // 19 - getDate() method returns the day of the month of the date as a number between 1 and 31.
// console.log(myDate.getDay()) // 3 - getDay() method returns the day of the week of the date as a number between 0 and 6 (0 for Sunday, 1 for Monday, ..., 6 for Saturday). In this case, it will return 3, which corresponds to Wednesday.
// console.log(myDate.getHours()) // 12 - getHours() method returns the hour of the date as a number between 0 and 23.
// console.log(myDate.getMinutes()) // 34 - getMinutes() method returns the minutes of the date as a number between 0 and 59.
// console.log(myDate.getSeconds()) // 56 - getSeconds() method returns the seconds of the date as a number between 0 and 59.
// console.log(myDate.getMilliseconds()) // 789 - getMilliseconds() method returns the milliseconds of the date as a number between 0 and 999.

// console.log(myDate.getTime()) // 1718734496789 - getTime() method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (also known as the Unix epoch). This value can be used to compare dates or perform date calculations.

// const anotherDate = new Date('2024-01-01'); // creating a date object with a specific date
// console.log(anotherDate.toLocaleString()) // Tue Jan 01 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// const dateFromTimestamp = new Date(1018734496659); // creating a date object from a timestamp (number of milliseconds since January 1, 1970, 00:00:00 UTC)
// console.log(dateFromTimestamp.toLocaleString()); // Wed Mar 19 1973 17:44:56 GMT+0000 (Coordinated Universal Time) - the date and time corresponding to the given timestamp.
console.log(myDate.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })) // Wednesday, June 19, 2024 - toLocaleString() method with options allows you to specify the format of the date and time string. In this case, it will return a string that includes the full weekday name, the numeric year, the full month name, and the numeric day of the month. The exact format may vary depending on the user's location and settings.

