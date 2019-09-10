import { dashboardItem } from '../partials/dashboardItem'

export const event = {
    name: 'event',
    extension: 'json',
    label: 'Event',
    folder: 'src/data',
    create: true,
    identifier_field: 'date',
    filter: { field: 'layout', value: 'event' },
    slug: '{{layout}}_{{slug}}',
    fields: [
        ...dashboardItem,
        { label: 'Layout', name: 'layout', widget: 'hidden', default: 'event' },
        { label: 'Title', name: 'title', widget: 'string' },
    ],
}
