enum DayOfWeek {
  Monday = 'WORKDAY',
  Tuesday = 'WORKDAY',
  Wednesday = 'WORKDAY',
  Thursday = 'WORKDAY',
  Friday = 'WORKDAY',
  Saturday = 'WEEKEND',
  Sunday = 'WEEKEND',
}


const isWeekend = (day: DayOfWeek) => {
    if (day === 'WEEKEND') return true;
}



