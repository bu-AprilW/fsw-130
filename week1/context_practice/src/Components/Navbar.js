import React from 'react'

class Navbar extends React.Component {

    render() {
        return (
            <nav className={this.props.data}>
                <ul>
                    <li id="home">Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}

export default Navbar