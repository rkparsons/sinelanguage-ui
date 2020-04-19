import { Artist, Podcast, Release } from './types'

export abstract class ContentModel {
    content: Artist | Release | Podcast
    isPlayableFromDashboard = true
    constructor(content: Artist | Release | Podcast) {
        this.content = content
    }
    getDateMs = () => new Date(this.content.date).getTime()
    getImage = () => this.content.image
    getImageCaption = () => this.content.title
    getDashboardWidth = () => 1
    abstract getDashboardLine1(): string
    abstract getDashboardLine2(): string | undefined
    abstract getListRowTitle(): string
    abstract getDetailUrl(): string
}

export class ArtistModel extends ContentModel {
    artist: Artist

    constructor(artist: Artist) {
        super(artist)
        this.artist = artist
    }

    getDashboardLine1 = () => this.artist.title
    getDashboardLine2 = () => undefined
    getListRowTitle = () => this.artist.title
    getDetailUrl = () => `/artists/${this.artist.uid}`.toLowerCase()
}

export class ReleaseModel extends ContentModel {
    release: Release

    constructor(release: Release) {
        super(release)
        this.release = release
    }

    getDashboardLine1 = () =>
        `${this.release.artist.title}, ${this.release.title}, ${this.release.format}`
    getDashboardLine2 = () => `[${this.release.uid}]`
    getListRowTitle = () =>
        `[${this.release.uid}]    ${this.release.artist.title}, ${this.release.title}, ${this.release.format}`
    getDetailUrl = () => `/releases/${this.release.uid}`.toLowerCase()
}

export class VideoReleaseModel extends ReleaseModel {
    isPlayableFromDashboard = false
    constructor(release: Release) {
        super(release)
    }

    getDashboardWidth = () => 2
}

export class PodcastModel extends ContentModel {
    podcast: Podcast

    constructor(podcast: Podcast) {
        super(podcast)
        this.podcast = podcast
    }

    getDashboardLine1 = () => `${this.podcast.title}, Podcast`
    getDashboardLine2 = () => `[${this.podcast.uid}]`
    getListRowTitle = () => `[${this.podcast.uid}]    ${this.podcast.title}`
    getDetailUrl = () => `/podcasts/${this.podcast.uid}`.toLowerCase()
}
