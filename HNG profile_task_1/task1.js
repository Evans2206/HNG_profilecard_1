const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (const [i, days] of weekdays.entries()) {
  console.log(`${i + 1} ${days}`);
}
let d = weekdays[0];
console.log(d);

const currentDate = new Date();
// const currentdayOfTheWeek = weekdays[currentDate.getDay()];
const currentdayOfTheWeek = weekdays[currentDate.getDay()];
// console.log(currentdayOfTheWeek);
console.log(weekdays[currentDate.getDay()]);

const currentUTCTime = Date.now();
//
document.querySelector(".currentdayOfTheWeek");
document.querySelector(".currentTime");
//
document.querySelector(".currentdayOfTheWeek").textContent =
  currentdayOfTheWeek;
document.querySelector(".currentTime").textContent = currentUTCTime;
