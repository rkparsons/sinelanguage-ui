import { dashboardItem } from '../partials/dashboardItem'

export const release = {
    name: 'release',
    extension: 'json',
    label: 'Release',
    folder: 'src/data',
    create: true,
    identifier_field: 'code',
    filter: { field: 'layout', value: 'release' },
    slug: '{{layout}}_{{slug}}',
    fields: [
        ...dashboardItem,
        { label: 'Layout', name: 'layout', widget: 'hidden', default: 'release' },
        { label: 'Code', name: 'code', hint: 'e.g. SINEXXX', widget: 'string' },
        { label: 'Title', name: 'title', widget: 'string' },
    ],
}
