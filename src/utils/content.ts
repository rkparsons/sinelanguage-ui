import { ContentItem } from '~/types/cms'
import { ContentType } from '~/constants/contentType'

export const sortByDate = (contents: ContentItem[]) =>
    contents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const sortByTitle = (contents: ContentItem[]) =>
    contents.sort((a, b) => a.title.localeCompare(b.title))

// todo: replace with hidden constant on cms type (can then also be used in gatsby create pages)
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
