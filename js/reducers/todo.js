import {
	TEST,
	ADD_TASK,
	DELETE_TASK,
	EDIT_TASK,
	SAVE_TASK,
	TOGGLE_TASK,
} from '../constants';
import {
	createTask,
	findAndEdit
} from '../models';
import uuid from 'js-uuid';

const initialState = [{
		task: 'Learn React/Redux',
		id: uuid(),
		editing: false,
		done: true,
	},
	{
		task: 'Make TODO App',
		id: uuid(),
		editing: false,
		done: false,
	},
];

const addItem = (state = initialState, action) => {
	switch (action.type) {
		case TEST:
			return state;

		case ADD_TASK:
			const taskParams = {
				task: action.task,
				id: uuid(),
			};
			const task = new createTask(taskParams);
			return [...state, task.create];

		case DELETE_TASK:
			const deletingId = action.id;
			return state.filter(item => item.id != deletingId);

		case EDIT_TASK:
			const editingParams = {
				id: action.id,
				state,
				edit: {
					editing: true
				}
			}
			const editor = new findAndEdit(editingParams);
			return editor.save;

		case SAVE_TASK:
			const savingParams = {
				id: action.payload.savingId,
				state,
				edit: {
					editing: false,
					task: action.payload.savingTask
				}
			}
			const saveTasker = new findAndEdit(savingParams);
			return saveTasker.save;

		case TOGGLE_TASK:
			const togglingParams = {
				id: action.id,
				state,
				edit: {
					toggle: true 
				}
			}
			const taskToggler = new findAndEdit(togglingParams);
			return taskToggler.save;
	}

	return state;
};

export default addItem;