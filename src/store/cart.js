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
        case INCREMENT_ITEM:
            const incrementId = action.id;
            const newStateAdd = {...state}
            let count = newStateAdd.count
            count += 1
            return newStateAdd;
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

const INCREMENT_ITEM = 'cart/INCREMENT_ITEM'

export const incrementItemInCart = (id) => {
    return {
        type: INCREMENT_ITEM,
        id
    }
}
