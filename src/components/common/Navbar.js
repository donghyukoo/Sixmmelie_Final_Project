import { NavLink } from 'react-router-dom';
import NavCSS from './Navbar.module.css';
import { decodeJwt } from '../../utils/tokenUtils';

function Navbar() {
    
    
    const isLogin = window.localStorage.getItem('accessToken');
    let decoded = null;

    if(isLogin !== undefined && isLogin !== null) {
        const temp = decodeJwt(window.localStorage.getItem("accessToken"));
        console.log(temp);
        decoded = temp.auth[0];
    }

    console.log('decoded ', decoded);
    return (
        <div className={ NavCSS.NavbarDiv }>
            <ul className={ NavCSS.NavlistUl }>

                <li><NavLink to="/AboutCompany">About Sixmelie</NavLink></li>

                <li><NavLink to="/informations">information</NavLink></li>

                <li className={ NavCSS.Wine}>
                    <NavLink to="/wines">Wine Celler</NavLink>
                        <div className={ NavCSS.Category}>
                            <li><a href='/wines'>All</a></li><br/>
                            <li><a href='/wines/red'>Red</a></li><br/>
                            <li><a href='/wines/white'>White</a></li><br/>
                            <li><a href='/wines/rose'>Rose</a></li><br/>
                            <li><a href='/wines/sparkling'>Sparkling</a></li><br/>
                        </div>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

