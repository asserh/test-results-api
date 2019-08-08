import moment from 'moment';

export function currentMonth(): string {
  return moment.utc().month().toString();
}

export function currentYear(): string {
  return moment.utc().year().toString();
}
