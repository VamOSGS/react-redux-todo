import { connect } from 'react-redux';
import { test, addTask } from '../actions';
import AddItem from '../components/AddItem';

const mapDispatchToProps = dispatch => ({
    onTest: () => {
        dispatch(test())
    },
    onAddTask: task => {
        dispatch(addTask(task))
    }
})

const AddItemContainer = connect(null, mapDispatchToProps)(AddItem);

export default AddItemContainer;