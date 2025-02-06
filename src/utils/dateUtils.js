import dayjs from 'dayjs';

export const formatDate = (date) => dayjs(date).format('YYYY-MM-DD');

export const isValidDateRange = (start, end) => {
  return dayjs(start).isBefore(dayjs(end));
};

export const formatDateWithDay = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};
