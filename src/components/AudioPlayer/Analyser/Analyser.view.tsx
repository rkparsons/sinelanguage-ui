import React, { Component, RefObject } from 'react'

import Visualizer from '../Visualizer'
import VisualizerRechartsArea from '../VisualizerRechartsArea'
import VisualizerRechartsLines from '../VisualizerRechartsLines'
import VisualizerSVG from '../VisualizerSVG'

type AnalyserState = {
    audioData: Uint8Array
}

type AnalyserProps = {
    audioRef: RefObject<HTMLAudioElement>
    showVisualisation: boolean
}

class Analyser extends Component<AnalyserProps, AnalyserState> {
    audioContext: AudioContext | undefined
    analyser: AnalyserNode | undefined
    dataArray: Uint8Array | undefined
    source: MediaElementAudioSourceNode | undefined
    rafId: number | undefined

    constructor(props: AnalyserProps) {
        super(props)
        this.state = { audioData: new Uint8Array(0) }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        if (!this.props.audioRef.current) {
            return
        }

        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        this.analyser = this.audioContext.createAnalyser()
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount)
        this.source = this.audioContext.createMediaElementSource(this.props.audioRef.current)
        this.source.connect(this.analyser)
        this.source.connect(this.audioContext.destination)
        this.rafId = requestAnimationFrame(this.tick)
    }

    tick() {
        if (this.analyser && this.dataArray) {
            this.analyser.getByteTimeDomainData(this.dataArray)
            this.setState({ audioData: this.dataArray })
            this.rafId = requestAnimationFrame(this.tick)
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.rafId!)
        this.analyser?.disconnect()
        this.source?.disconnect()
    }

    render() {
        return this.props.showVisualisation ? (
            <VisualizerRechartsArea audioData={this.state.audioData} />
        ) : (
            <></>
        )
    }
}

export default Analyser
