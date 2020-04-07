import { regexp } from './regexp'

export const url = regexp(
    '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
    'Must be a valid URL'
)
