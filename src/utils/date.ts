import moment from 'moment'

export const getTimestamp = (timeMs: number, durationMs: number) => {
    const format = getDateFormat(durationMs)

    return moment.utc(timeMs).format(format)
}

export const getDurationTimestamp = (durationMs: number) => {
    const format = getDateFormat(durationMs)

    return moment.utc(durationMs).format(format)
}

const getDateFormat = (milliseconds: number) => {
    const hours = moment.duration(milliseconds).asHours()
    const minutes = moment.duration(milliseconds).asMinutes()
    return hours >= 1 ? 'H:mm:ss' : minutes >= 10 ? 'mm:ss' : 'm:ss'
}
