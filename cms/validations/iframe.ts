import { regexp } from './regexp'

export const iframe = regexp(
    // prettier-ignore
    '<iframe .*<\/iframe>$',
    'Should be valid HTML iframe tag with src attribute, e.g. <iframe src="https://example.com/embed/1234"></iframe>'
)
