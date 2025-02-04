// Function for today's date, month, and day
export function todayDate() {
  const today = new Date();
  const date = today.getDate().toString().padStart(2, '0');
  const month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
  const day = today.toLocaleString('default', { weekday: 'long' }).toLowerCase();
  const year = today.getFullYear();
  return { date, month, day, year };
}


// Function for last 1 month's dates with date, month, and day
export const generateLastMonthDates = () => {
  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);

  const dateArray = [];

  for (let d = new Date(oneMonthAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const date = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'short' }).toLowerCase();
    const day = d.toLocaleString('default', { weekday: 'short' }).toLowerCase();
    dateArray.push({ date, month, day });
  }

  return dateArray;
};

// Function for next 1 month's dates with date, month, and day
export const generateNextMonthDates = () => {
  const today = new Date();
  const oneMonthAhead = new Date();
  oneMonthAhead.setMonth(today.getMonth() + 1);

  const dateArray = [];

  for (let d = new Date(today); d <= oneMonthAhead; d.setDate(d.getDate() + 1)) {
    const date = d.getDate().toString().padStart(2, '0');
    const month = d.toLocaleString('default', { month: 'short' }).toLowerCase();
    const day = d.toLocaleString('default', { weekday: 'short' }).toLowerCase();
    dateArray.push({ date, month, day });
  }

  return dateArray;
};

// Function to format date as "YYYY-MM-DD" from "2024-11-01T10:05:16.659Z" format
export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
}

export function getGreeting() {
  const date = new Date();
  const hours = date.getHours();
  let greeting;

  if (hours < 12) {
      greeting = 'Good Morning 😄';
  } else if (hours < 18) {
      greeting = 'Good Afternoon 😃';
  } else if (hours < 21) {
      greeting = 'Good Evening 😊';
  } else {
      greeting = 'Good Night 😴';
  }
  
  return {greeting};
}


