import { SelectedMediaContext } from '~/contexts/selectedMediaContext'
import { useContext } from 'react'

export default () => {
    const context = useContext(SelectedMediaContext)

    if (context === undefined) {
        throw new Error('useAudioContext must be used within an AudioProvider')
    }

    return context
}
