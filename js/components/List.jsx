import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    handleDelete = id => event => {
        this.props.onDelete(id);
    }
    handleEdit = id => event => {
        this.props.onEdit(id);
    }
    handleSave = (id, value) => event => {
        const info = { savingId: id, savingTask: value };
        this.props.onSave(info);
    }
    handleToggle = id => event => {
        console.log(id)
        this.props.onToggle(id);
    }
    render() {
        const todos = this.props.todoState.todo;
        let list = todos;
        let message = 'Nothing to do';
        switch (this.props.filter) {
            case 'done':
                list = list.filter(item => item.done == true);
                message = `You don't have completed tasks`;
                break;
            case 'active':
                list = list.filter(item => item.done == false)
                break;
            default:
                break;
        }

        return (
            <ul className={'list'}>
                {list.length == 0 ? <h3>{message}</h3> :
                    list.map((item, i) =>
                        <Item key={i}
                            taskObj={item}
                            editItem={this.handleEdit}
                            saveItem={this.handleSave}
                            toggleItem={this.handleToggle}
                            deleteItem={this.handleDelete} />
                    )}
            </ul>
        );
    }
}

export default List;