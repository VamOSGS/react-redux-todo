import { connect } from 'react-redux';
import { test, deleteTask, editTask, saveTask, toggleTask } from '../actions';
import List from '../components/List';

const mapStateToProps = state => ({
    todoState: state
})

const mapDispatchToProps = dispatch => ({
    onTest: () => {
        dispatch(test())
    },
    onDelete: id => {
        dispatch(deleteTask(id))
    },
    onEdit: id => {
        dispatch(editTask(id))
    },
    onSave: data => {
        dispatch(saveTask(data))
    },
    onToggle: id => {
        dispatch(toggleTask(id))
    }
})

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
