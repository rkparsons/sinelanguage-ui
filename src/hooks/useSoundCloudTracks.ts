import { Track } from '~/types'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby'

export default () =>
    useStaticQuery(graphql`
        {
            allSoundcloudtrack {
                nodes {
                    soundcloud_id
                    stream_url
                    waveform_url
                    samples
                }
            }
        }
    `).allSoundcloudtrack.nodes as Track[]
