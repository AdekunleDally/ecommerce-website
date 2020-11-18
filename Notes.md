### Only the <HomePage /> component has access to the history props that we need
 
 ## Importing Logo into a component
### 1. import {Link} from 'react-router-dom';
### 2. import {ReactComponent as Logo} from '../../assets/crown.svg';

### 3.  <Link className="logo-container" to="/">
###       <Logo  className="logo"/>
###     </Link>