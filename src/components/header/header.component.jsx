import React from 'react';
//import './header.styles.scss'
//import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg'
//import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {auth} from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from 'reselect';
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink,OptionDiv} from './header.styles'

const Header=({currentUser, hidden})=>(
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo  className="logo"/>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {
        currentUser? 
        <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
        :
         <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
    
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({ //This function allows us access state(i.e the root-reducer)
  currentUser: selectCurrentUser,
  hidden: selectCartHidden  // we get access to the hidden state from the cart reducer
})
export default connect(mapStateToProps)(Header);































