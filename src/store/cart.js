export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const id = action.id;
            const newItem = {
                ...state,
                [id]: { id, count: 1 }
            };
            return newItem
        case DELETE_ITEM:
            const itemId = action.id;
            const newState = {...state}
            delete newState[itemId]
            return newState
        default:
            return state;
    }
};

const ADD_ITEM = 'cart/ADD_ITEM'

export const addItemToCart = (id) => {
    return {
        type: ADD_ITEM,
        id
    }
};

const DELETE_ITEM = 'cart/DELETE_ITEM'

export const deleteItemFromCart = (id) => {
    return {
        type: DELETE_ITEM,
        id
    }
};
