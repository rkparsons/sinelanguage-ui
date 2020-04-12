import { Track } from '~/types'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default () =>
    useStaticQuery(graphql`
        {
            allSoundcloudtrack {
                nodes {
                    soundcloud_id
                    title
                    stream_url
                    waveform_url
                }
            }
        }
    `).allSoundcloudtrack.nodes as Track[]
