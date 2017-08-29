const initialState = [
    'categorie1',
    'categorie2'
]
export default function addItem(state = initialState, action) {
    if (action.type === 'ADD_CATEGORIE') {
        return state;
    } else if (action.type == 'DELETE_CATEGORIE') {
        return state;
    }
    return state;
}