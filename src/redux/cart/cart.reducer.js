import CartActionTypes from './cart.types';
import {addItemToCart, removeItemFromCart} from './cart.utils';
const INITIAL_STATE={
    hidden:true,
    cartItems:[] //for saving cart items that were clicked
}

const CartReducer=(state=INITIAL_STATE, action)=>{
  switch(action.type){
      case CartActionTypes.TOGGLE_CART_HIDDEN :
          return{
              ...state,
              hidden:!state.hidden
          }

          case CartActionTypes.ADD_ITEM:
              return{
                  ...state,
                //  cartItems:[...state.cartItems, action.payload] We make our cartItems array to be  a spreaded old cart items 
                //plus the new cart item that got fired.
                  cartItems:addItemToCart(state.cartItems, action.payload)
                }

          case CartActionTypes.REMOVE_ITEM:
            return{
              ...state,
              cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

          case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
              ...state,
              cartItems: state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }
          default:
              return state;
  }
}

export default CartReducer;