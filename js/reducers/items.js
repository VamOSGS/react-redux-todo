const initialState = {
    table: [
        {
            name: 'Board1',
            tasks: [
                'item1',
                'item2'
            ]
        },
        {
            name: 'Board2',
            tasks: [
                'item1',
                'item1',
                'item1',
                'itdasdasdem2'
            ]
        }
    ]
}

export default function addItem(state = initialState, action) {

    switch (action.type) {
        case 'ADD_ITEM':
            let stateAT = state;
            let a = stateAT.table[action.id].tasks.push(action.item);
            return state;
            break;
        case 'ADD_BOARD':
            return {
                ...state, table: [...state.table, {
                    name: action.boardName, tasks: [
                        'item1'
                    ]
                }]
            };
            break;
    }

    return state;

}