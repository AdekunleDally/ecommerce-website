import {combineReducers} from 'redux';
import CartReducer from './cart/cart.reducer';
import  userReducer from './user/user.reducer';
import  shopReducer from './shop/shop.reducer'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer';

const persistConfig={
  key:'root',
  storage,
  whitelist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: directoryReducer, // lets point to the directory reducer using the directory key
    shop: shopReducer
})
;
export default persistReducer(persistConfig,rootReducer)