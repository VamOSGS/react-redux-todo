import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        this.props.onAddTask(this.taskInput.value);
        this.taskInput.value = null;
    }

    render() {
        return (
            <div>
                <input type="text" ref={(input) => {this.taskInput = input}}/>
                <button onClick={this.addTask}>Add</button>
                <ul>
                    {this.props.items.map((item, i) =><li key={i}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        items: state.items
    }),
    dispatch => ({
        onAddTask: (taskName) => {
            dispatch({type: 'ADD_ITEM', item: taskName})
        }
    })
)(App);
