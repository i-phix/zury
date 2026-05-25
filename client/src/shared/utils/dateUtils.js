import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(relativeTime)
dayjs.extend(isBetween)

export const fromNow = (date) => dayjs(date).fromNow()

export const isExpired = (date) => dayjs(date).isBefore(dayjs())

export const daysUntil = (date) => dayjs(date).diff(dayjs(), 'day')

export const isExpiringSoon = (date, days = 60) => {
  const d = daysUntil(date)
  return d >= 0 && d <= days
}

export const dateRange = (start, end) => ({
  start: dayjs(start).startOf('day').toDate(),
  end:   dayjs(end).endOf('day').toDate(),
})

export const monthStart = (date) => dayjs(date).startOf('month').toDate()
export const monthEnd   = (date) => dayjs(date).endOf('month').toDate()

export const formatRelative = (date) => dayjs(date).fromNow()
