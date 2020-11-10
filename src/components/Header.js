import React from 'react';
import headerLogo from '../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="Лого" />
            { props.loggedIn ?
                <div className="header__auth">
                    <p className="header__auth_email">{props.email}</p>
                    <a className="header__auth_link-exit transparent" onClick={props.loggedOut} href={props.routePath}>{props.routePathName}</a>
                </div>
                :
                <div className="header__auth">
                    <Link to={props.routePath} className="header__auth_link transparent">{props.routePathName}</Link>
                </div>
            }
        </header>
        
    );
}

export default Header;
