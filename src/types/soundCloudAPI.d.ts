import { Track } from './track'

export type SoundCloudAPI = {
    initialize({ client_id }: { client_id: string }): void
    get(path: string): Promise<Track>
}
