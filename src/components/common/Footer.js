import { NavLink } from 'react-router-dom';
import FooterCSS from './Footer.module.css';

function Footer() {

    return (
        <div className={ FooterCSS.footerDiv }>
            <div className={FooterCSS.navlink} style= { { marginTop:'5px',height:'5px', textAlign: 'center' } }>
                <NavLink to="/footerContent/termsAndConditions"> 이용약관 |</NavLink>
                <NavLink to="/footerContent/privacyPolicy"> 개인정보처리방침 |</NavLink>
                <NavLink to="/footerContent/contactUs"> Contact Us   </NavLink>
            </div>
                <h5 style= { { width: '100%', textAlign: 'center', color: 'darkgrey'} }>
                    대표자 : 6믈리에(공동대표) / 대표 번호 : 02-1234-1234 / 이메일 : kddh940512@gmail.com<br/>
                    주소 : 서울 종로구 인사동길 12, 15F / 개인정보보호 책임자 : 김동혁<br/>
                    Copyright (c) 6믈리에  All Rights Reserved since 2022
                </h5>  
        </div>
    );
}
export default Footer;