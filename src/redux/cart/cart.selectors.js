import {createSelector} from 'reselect';

const selectCart= (state)=> state.cart;

export const selectCartItems= createSelector(
    [selectCart], // A collection of the input selectors
    cart=> cart.cartItems  // Parameter passed here is a slice of the state;

    // At this point, the selector is now a memoized selector since we used createSelector to create the selector.
);

export const selectCartHidden= createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartItems=>  
      cartItems.reduce(
        (accumulatedQuantity, cartItem)=> 
        accumulatedQuantity + cartItem.quantity,
        0)
);