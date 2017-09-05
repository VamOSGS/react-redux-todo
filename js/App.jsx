import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class App extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.state = {
            validation: false
        }
    }

    addTask() {
        let taskText = this.refs.taskInput.input.value;
        console.log( this.props)
        if (taskText) {
            this.props.onAddTask(taskText);
            this.refs.taskInput.input.value = null;
            this.setState({
                validation: false
            })
        } else {
            this.setState({
                validation: true
            })
        }
    }
    addBoard() {

        this.props.onAddBoard();
    }

    deleteTask(id) {
        this.props.onDeleteTask(id);
    }

    render() {
        console.log(this.props.board.map)
        return (
            <div className='wrapper'>
                {this.props.board.map((board, i) =>

                    <div className='board' key={i}>
                        <div className='TaskList'>
                            <div>
                                <List>
                                    <Subheader>{board}</Subheader>
                                    {this.props.items.map((item, i) => <ListItem key={i}
                                        primaryText={item}
                                        />
                                    )}
                                </List>
                                <Divider/>
                            </div>

                            <div className='Adding'>
                                <TextField
                                    errorText={this.state.validation ? "This field is required." : ''}
                                    hintText="Add Task"
                                    ref='taskInput'
                                />
                                <FloatingActionButton className='plusBtn' mini={true} onClick={this.addTask}>
                                    <ContentAdd/>
                                </FloatingActionButton>
                            </div>
                            <FloatingActionButton onClick={this.addBoard} secondary={true}>
                                <ContentAdd/>
                            </FloatingActionButton>
                        </div>

                    </div>
                )}
            </div>
        )
    }
}

export default connect(
    state => ({
        items: state.items,
        board: state.board
    }),
    dispatch => ({
        onAddTask: (taskName) => {
            dispatch({type: 'ADD_ITEM', item: taskName})
        },
        onDeleteTask: (id) => {
            dispatch({type: 'DELETE_ITEM', item: id})
        }
    })
)(App);
