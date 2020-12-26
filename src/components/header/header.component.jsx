import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
//import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {auth} from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from 'reselect';


const Header=({currentUser, hidden})=>(
  <div className="header">
    <Link className="logo-container" to='/'>
      <Logo  className="logo"/>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser? 
        <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
        :
         <Link className="option" to="/signin">SIGN IN</Link>
        }
        <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
    
  </div>
)

const mapStateToProps = createStructuredSelector({ //This function allows us access state(i.e the root-reducer)
  currentUser: selectCurrentUser,
  hidden: selectCartHidden  // we get access to the hidden state from the cart reducer
})
export default connect(mapStateToProps)(Header);































