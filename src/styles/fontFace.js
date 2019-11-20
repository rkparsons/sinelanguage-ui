import robotoWoff from './fonts/Roboto.woff'
import robotoWoff2 from './fonts/Roboto.woff2'

export default {
    fontFamily: 'Roboto',
    fontDisplay: 'block',
    src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${robotoWoff2}) format('woff2'),
    url(${robotoWoff}) format('woff')
  `,
    unicodeRange: 'U+000-5FF',
}
