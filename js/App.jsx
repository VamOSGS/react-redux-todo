import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.addBoard = this.addBoard.bind(this);
        this.state = {
            open: false,
        };
    }

    addTask(i) {
        let taskText = this.refs[`${i}`].input.value;
        if (taskText) {
            this.props.onAddTask(taskText, i);
            this.refs[`${i}`].input.value = null;
            this.setState({
                open: false
            })
        } else {
            this.setState({
                open: true
            })
        }
    }

    addBoard() {
        let boardText = this.refs.board.input.value;
        if (boardText) {
            this.props.onAddBoard(boardText);
            this.refs.board.input.value = null;
            this.setState({
                open: false
            })
        }
        else {
            this.setState({
                open: true
            })
        }
    }

    render() {
        // console.log(this.props.items);
        return (
            <div className='wrapper'>
                <Snackbar
                    open={this.state.open}
                    message="Can't add empty task"
                    autoHideDuration={2000}
                    onRequestClose={this.handleRequestClose}
                />
                {this.props.items.table.map((item, i) => {
                    // item.tasks.push('hello')
                })
                }
                {this.props.items.table.map((item, i) =>

                    <div className='board' key={i}>
                        <div className='TaskList'>
                            <div>
                                <List>
                                    <Subheader className='header'>{item.name}</Subheader>

                                    {item.tasks.map((item, i) => <ListItem key={i}
                                                                           primaryText={item}
                                        />
                                    )}
                                </List>
                                <Divider/>
                            </div>
                            <div className='Adding'>
                                <TextField
                                    hintText="Add Task"
                                    ref={i}

                                />
                                <FloatingActionButton className='plusBtn' mini={true} onClick={() => {
                                    this.addTask(i)
                                }}>
                                    <ContentAdd/>
                                </FloatingActionButton>
                            </div>
                        </div>

                    </div>
                )}
                <div className='boardAdd'>
                    <TextField

                        hintText="Add Board"
                        ref='board'
                    />
                    <FloatingActionButton onClick={this.addBoard} secondary={true}>
                        <ContentAdd/>
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        items: state.items
    }),
    dispatch => ({
        onAddTask: (taskName, id) => {
            dispatch({type: 'ADD_ITEM', item: taskName, id: id})
        },
        onAddBoard: (boardName) => {
            dispatch({type: 'ADD_BOARD', boardName: boardName})
        }
    })
)(App);
