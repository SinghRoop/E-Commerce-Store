import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    COUNT_CART_TOTALS,
    TOGGLE_CART_ITEM_AMOUNT,
    CLEAR_CART,
} from "../actions";

const cart_reducer = (state, action) => {
    if (action.type === ADD_TO_CART) {
        const { id, amount, color, product } = action.payload;

        // check if item is already in the cart
        // then increment cart value + amount 
        const tempItem = state.cart.find((i) => i.id === id + color);
        if (tempItem) {

            const tempCart = state.cart.map((cartItem) => {
                if (cartItem.id === id + color) {
                    let newAmount = cartItem.amount + amount;
                    if (newAmount > cartItem.max) {
                        newAmount = cartItem.max
                    }
                    return { ...state, amount: newAmount }
                }
                else {
                    return cartItem
                }
            })
            return { ...state, cart: tempCart }
        }

        //add new item
        else {
            const newItem = {
                id: id + color,
                color,
                amount,
                name: product.name,
                image: product.images[0].url,
                price: product.price,
                max: product.stock
            }
            return { ...state, cart: [...state.cart, newItem] }
        }
    }

    return state;
    // throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
