const initialState = [
    'item1',
    'item2'
]
export default  function addItem(state = initialState, action) {
    if (action.type === 'ADD_ITEM') {
        return [
            ...state,
            action.item
        ];
    } else if (action.type == 'DELETE_ITEM') {
        return state;
    }
    return state;
}