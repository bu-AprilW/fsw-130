import React from 'react'

class Main extends React.Component {

    render() {
        return (
            <main className={this.props.data}>
                <h1>Click to change themes</h1>
                <button onClick={this.props.action}>Click Me</button>
            </main>
        )
    }
}

export default Main