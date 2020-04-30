import React from 'react';
import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import {Link} from 'react-router-dom'

const Header = ({currentUser}) => {
    return(
        <div className = 'header'>
            <Link to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            </div>
        </div>
    )
}

export default Header;