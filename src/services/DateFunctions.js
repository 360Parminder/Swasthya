
export const generateLastMonthDates = () => {
    const today = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(today.getMonth() - 1);

    const dateArray = [];

    for (let d = new Date(oneMonthAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const date = d.getDate().toString().padStart(2, '0');
      const month = d.toLocaleString('default', { month: 'short' }).toLowerCase();
      dateArray.push({ date, month });
    }

    return dateArray.reverse();
  };