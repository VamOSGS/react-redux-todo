import React, { Component } from 'react';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';
import MdEdit from 'react-icons/lib/md/edit';
import MdDoneAll from 'react-icons/lib/md/done-all';

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.taskObj.task
		}
	}
	handleChange = e => {
		this.setState({ value: e.target.value })
	}
	render() {
		const { taskObj, editItem, deleteItem, saveItem, toggleItem } = this.props;
		const { editing, task, id, done } = taskObj;

		return (
			<li className={done ? 'done' : null}>
				<button onClick={toggleItem(id)}><MdCheck /></button>
				{editing ? <input
					ref={input => this.editedTask = input}
					value={this.state.value}
					onChange={this.handleChange}
					type="text" />
					:
					<strong>{task}</strong>
				}
				<button onClick={deleteItem(id)}><MdClear /></button>
				<button
					onClick={editing ?
						saveItem(id, this.state.value) :
						editItem(id)}>
					{editing ? <MdDoneAll /> : <MdEdit />}
				</button>
			</li>
		)
	}
}

export default Item;