import dayjs from 'dayjs';

export const formatDate = (date) => dayjs(date).format('YYYY-MM-DD');

export const isValidDateRange = (start, end) => {
  return dayjs(start).isBefore(dayjs(end));
};
