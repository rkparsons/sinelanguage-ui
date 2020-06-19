import Cookies from 'universal-cookie'
import moment from 'moment'

export default () => {
    const cookies = new Cookies()

    function get(name: string) {
        return cookies.get(name)
    }

    function set(name: string, value: string | number | boolean) {
        cookies.set('mailinglist', value, {
            path: '/',
            expires: moment().add(1, 'years').toDate(),
        })
    }

    function getMailingListCookie() {
        return get('mailinglist') as boolean | undefined
    }

    function setMailingListCookie(value: boolean) {
        set('mailinglist', value)
    }

    return { getMailingListCookie, setMailingListCookie }
}
