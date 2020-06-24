import AudioContext from '~/contexts/audioContext'
import { useContext } from 'react'

export default () => {
    const context = useContext(AudioContext)

    if (context === undefined) {
        throw new Error('useAudioContext must be used within an AudioProvider')
    }

    return context
}
