import { ContentItem } from '~/types/cms'
import IconButton from '~/components/IconButton'
import { PlayArrow } from '@material-ui/icons'
import React from 'react'
import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import { Typography } from '@material-ui/core'

type ViewProps = {
    content: ContentItem
}

export default ({ content }: ViewProps) => {
    return (
        <SelectedMediaContext.Consumer>
            {({ setSelectedMedia }) => (
                <IconButton
                    label={<Typography variant="body1">PLAY</Typography>}
                    icon={<PlayArrow fontSize="small" />}
                    onClick={() => {
                        setSelectedMedia(content)
                    }}
                />
            )}
        </SelectedMediaContext.Consumer>
    )
}
