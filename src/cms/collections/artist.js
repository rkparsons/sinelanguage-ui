import { dashboardItem } from '../partials/dashboardItem'

export const artist = {
    name: 'artist',
    extension: 'json',
    label: 'Artist',
    folder: 'src/data',
    filter: { field: 'layout', value: 'artist' },
    slug: '{{layout}}_{{slug}}',
    fields: [
        ...dashboardItem,
        { label: 'Layout', name: 'layout', widget: 'hidden', default: 'artist' },
        { label: 'Name', name: 'title', widget: 'string' },
        { label: 'Biography', name: 'body', widget: 'markdown' },
    ],
}
