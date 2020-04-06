import { ContentTypeProps } from 'contentful-management/typings/contentType'
import { EditorInterface } from './editorInterface'

export type ContentTypeModel = ContentTypeProps &
    EditorInterface & {
        id: string
    }
