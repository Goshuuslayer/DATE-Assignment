let todayDate = new Date();
document.write(`${todayDate}<br><br>`);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = new Date().getMonth();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let today = new Date().getDay();

let funday = new Date().getDay();
let dayType;
if (funday === 0 || funday === 6) {
  dayType = "It's Fun Day-Not FOr US😥";
} else {
  dayType = "It's a Working Day";
}

let fifteenth = new Date().getDate();
let halfMonth;
if (fifteenth < 16) {
  halfMonth = "First fifteen days of the month";
} else {
  halfMonth = "Last days of the month";
}

let hours = new Date().getHours();
let ampm;
if (hours < 12) {
  ampm = "It's AM";
} else {
  ampm = "It's PM";
}

alert(
  `Current Month: ${months[currentMonth]}\n` +
    `Today is: ${days[today]}\n` +
    `${dayType}\n` +
    `${halfMonth}\n` +
    `${ampm}`,
);

let ramadan = new Date(2026, 1, 19);
let now = new Date();
let difference = now - ramadan;
let ramadamDays = Math.floor(difference / (1000 * 60 * 60 * 24));
document.write(`${ramadamDays} days have passed since 1st Ramadan, 2026`);
