import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userPhoto from '../img/Avatar_Cat-512.png';

import { CurrentUserContext } from '../context/currentUser';

const TopBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);

  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Medium
        </Link>
        <ul className='nav navbar-nav pull-xs-right'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link' exact>
              Home
            </NavLink>
          </li>
          {!currentUserState.isLoggedIn && (
            <>
              <li className='nav-item'>
                <NavLink to='/login' className='nav-link' exact>
                  Sign In
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/register' className='nav-link' exact>
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
          {currentUserState.isLoggedIn && (
            <>
              <li className='nav-item'>
                <NavLink to='/articles/new' className='nav-link'>
                  <i className='ion-compose'></i> New Post
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to={`/profiles/${currentUserState.currentUser.username}`}
                  className='nav-link'
                >
                  <img
                    className='user-pic'
                    src={
                      currentUserState.currentUser.image !== null
                        ? currentUserState.currentUser.image
                        : userPhoto
                    }
                    alt=''
                  />
                  &nbsp; {currentUserState.currentUser.username}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
