const initialState = [
    'board1'
]
export default function addItem(state = initialState, action) {

    switch (action.type) {
        case 'ADD_BOARD':
            return [
                ...state,
                action.item
            ];
            break;
        default:
            return state;
    }

}