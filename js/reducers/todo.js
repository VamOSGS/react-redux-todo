import { TEST, ADD_TASK, DELETE_TASK, EDIT_TASK,SAVE_TASK, TOGGLE_TASK, } from '../constants';
import { createTask } from '../models';

const initialState = [{
		task: 'Learn React/Redux',
		id: 1,
		editing: false,
		done: true,
	},
	{
		task: 'Make TODO App',
		id: 2,
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
				name: action.task,
				id: state.length + 1,
			};
			const task = new createTask(taskParams.name, taskParams.id);
			return [...state, task.create];

		case DELETE_TASK:
			const deletingId = action.id;
			return state.filter(item => item.id != deletingId);

		case EDIT_TASK:
			const editingId = action.id;
			return state.map(task => (task.id == editingId ? {

				...task,
				editing: true,
			} : task));

		case SAVE_TASK:
			const {
				savingId,
				savingTask,
			} = action.payload;
			return state.map(task => (task.id == savingId ? {

				...task,
				editing: false,
				task: savingTask,
			} : task));

		case TOGGLE_TASK:
			const togglingId = action.id;
			return state.map(task => (task.id == togglingId ? {

				...task,
				done: !task.done,
			} : task));
	}

	return state;
};

export default addItem;