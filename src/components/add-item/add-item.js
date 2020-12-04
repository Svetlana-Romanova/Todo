import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

    state = {
        value: ''
    }

    onChangeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.value);
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <form className="add-item d-flex flex-column" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" placeholder="What will you do..."
                    value={this.state.value}
                    onChange={this.onChangeValue}></input>
                <button className="btn btn-outline-secondary">Add to your list</button>
            </form>
        )
    }
}