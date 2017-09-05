const initialState = [
    'item1',
    'item2'
]
export default function addItem(state = initialState, action) {

    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ];
            break;
        case 'DELETE_ITEM':
            return [
                delete state.splice(action.item,1),
            ];
            break;
    }
    return state;
}