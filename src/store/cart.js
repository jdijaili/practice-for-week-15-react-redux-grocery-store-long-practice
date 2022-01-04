export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_CART:
            const id = action.id;
            const newItem = {
                ...state,
                id: { id, count: 1 }
            };
            return newItem
        default:
            return state;
    }
};

const ADD_CART = 'cart/ADD_CART'

export const addItemToCart = (id) => {
    return {
        type: ADD_CART,
        id
    }
}
