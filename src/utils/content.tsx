import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'

export const sort = (contents: ContentItem[]) =>
    contents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const getHoverSize = (content: ContentItem) =>
    content.__typename === ContentType.VIDEO ? 12 : 5

export const getUrl = (content: ContentItem) => {
    const slug = content.uid.toLowerCase()
    return content.__typename === ContentType.RELEASE
        ? `/releases/${slug}`
        : content.__typename === ContentType.VIDEO
        ? `/releases/video/${slug}`
        : content.__typename === ContentType.ARTIST
        ? `/artists/${slug}`
        : content.__typename === ContentType.EVENT
        ? `/events/${slug}`
        : content.__typename === ContentType.PODCAST
        ? `/podcasts/${slug}`
        : ''
}
