import React from 'react'
import logo from '../../assets/logo.gif'
import logoStatic from '../../assets/logo.jpg'
import styles from './index.module.scss'

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gif: logo,
            static: logoStatic,
            loaded: logo,
        }
    }

    animateLogo = () => {
        this.setState({ loaded: this.state.static })
        setTimeout(() => {
            this.setState({ loaded: this.state.gif })
        }, 0)
    }

    render() {
        return (
            <div>
                <img className={styles.logo} src={this.state.loaded} alt="Logo" />
            </div>
        )
    }
}

export default Logo
