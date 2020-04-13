import { Track } from '~/types'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default () =>
    useStaticQuery(graphql`
        {
            allSoundcloudtrack {
                nodes {
                    duration
                    samples
                    soundcloud_id
                    stream_url
                    waveform_url
                }
            }
        }
    `).allSoundcloudtrack.nodes as Track[]
