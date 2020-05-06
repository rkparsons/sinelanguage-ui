import { Canvas, Visualisation } from './Visualizer.style'
import React, { Component } from 'react'

type VisualiserState = {}

type VisualiserProps = {
    audioData: Uint8Array
}

class Visualiser extends Component<VisualiserProps, VisualiserState> {
    canvas: React.RefObject<HTMLCanvasElement>
    dpi = window.devicePixelRatio

    constructor(props: VisualiserProps) {
        super(props)
        this.canvas = React.createRef()
    }

    componentDidUpdate() {
        this.draw()
    }

    fix_dpi() {
        if (!this.canvas.current) {
            return
        }
        //create a style object that returns width and height
        const width = +getComputedStyle(this.canvas.current).getPropertyValue('width').slice(0, -2)
        const height = +getComputedStyle(this.canvas.current)
            .getPropertyValue('height')
            .slice(0, -2)

        //set the correct attributes for a crystal clear image!
        this.canvas.current.setAttribute('width', `${width * this.dpi}`)
        this.canvas.current.setAttribute('height', `${height * this.dpi}`)
    }

    draw() {
        if (!this.canvas.current) {
            return
        }
        this.fix_dpi()

        const { audioData } = this.props
        const canvas = this.canvas.current
        const height = canvas.height
        const width = canvas.width
        const context = canvas.getContext('2d')!
        let x = 0
        const sliceWidth = (width * 1.0) / audioData.length

        context.lineWidth = 2
        context.strokeStyle = '#000000'
        // context.strokeStyle = `hsl(${~~(360 * Math.random())},100%,70%)`
        // context.strokeStyle = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        context.clearRect(0, 0, width, height)

        context.beginPath()
        context.moveTo(0, height / 2)
        for (const item of audioData) {
            const y = (item / 255.0) * height
            context.lineTo(x, y)
            x += sliceWidth
        }
        context.lineTo(x, height / 2)
        context.stroke()
    }

    render() {
        return (
            <Visualisation>
                <Canvas ref={this.canvas} />
            </Visualisation>
        )
    }
}

export default Visualiser
