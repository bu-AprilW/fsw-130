import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import { Link } from "react-router-dom"


class ShowForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            image: ""
        }
    }
    handleChange = e => {
        e.preventDefault()
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.name)
        this.props.dispatch(actions.addShow(this.state))
        this.setState({ name: "", image: "" })
    }
    handleDelete = (e) => {
        this.props.dispatch(actions.removeShow(e.target.id))
    }
    render() {
        return (
            <div>
                <Link className="link1" id="idLink1" to="/">
                    HOME:
                </Link>
            <div className="showList">
                <form className="input" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="Enter Title"
                    onChange={this.handleChange} />
                <button id="enBtn">Enter</button>
                </form>
            <h1 id="showHeader">~Shows~</h1>
            <div className="list">
                {this.props.show.map((show, index) => (
                    <div className="listItem" key={show.name} >
                        <h1>{show.name}<br /><img src={show.image} alt=""/></h1>
                        <button className="delBtn" id={index} onClick={this.handleDelete}>Delete</button>
                    </div>
                ))}
            </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.show)
    return {
        show: state.show
    }
}

export default connect(mapStateToProps)(ShowForm)