import { dashboardItem } from '../partials/dashboardItem'

export const podcast = {
    name: 'podcast',
    extension: 'json',
    label: 'Podcast',
    folder: 'src/data',
    create: true,
    identifier_field: 'code',
    filter: { field: 'layout', value: 'podcast' },
    slug: '{{layout}}_{{slug}}',
    fields: [
        ...dashboardItem,
        { label: 'Layout', name: 'layout', widget: 'hidden', default: 'release' },
        { label: 'Code', name: 'code', hint: 'e.g. SINEXXX', widget: 'string' },
        { label: 'Artist', name: 'artist', widget: 'string' },
    ],
}
