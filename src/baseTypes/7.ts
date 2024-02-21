/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
function isWeekend(day: Day): boolean {
  return day === Day.SATURDAY || day === Day.SUNDAY;
}

const today: Day = Day.MONDAY;
const isTodayWeekend: boolean = isWeekend(today);

console.log(isTodayWeekend);
