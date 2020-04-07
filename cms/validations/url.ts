export const url = {
    regexp: {
        // prettier-ignore
        pattern: '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
        flags: '',
    },
    message: 'Must be a valid URL',
}
