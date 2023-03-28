import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { decodeJwt } from '../../utils/tokenUtils';
import HeaderCSS from './Header.module.css';

import {
    callLogoutAPI
} from '../../apis/MemberAPICalls';
import LoginModal from './LoginModal';


function Header() {

    //const isLogin = false;
    const navigate = useNavigate();

    // 리덕스를 이용하기 위한 디스패처, 셀렉터 선언
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // 저장소에서 가져온 loginMember 정보
    const isLogin = window.localStorage.getItem('accessToken');    // Local Storage 에 token 정보 확인
    const [search, setSearch] = useState('');

    const [loginModal, setLoginModal] = useState(false);

    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    // 검색 기능 사용x
    // const onEnterkeyHandler = (e) => {
    //     if (e.key == 'Enter') {
    //         console.log('Enter key', search);
            
    //         navigate(`/search?value=${search}`, { replace: false });
            
    //         // dispatch(callSearchProductAPI({
    //         //     search: search
    //         // }));
    //         window.location.reload();
    //     }
    // }

    const onClickLogoHandler = () => {
        // 로고 클릭시 메인 페이지로 이동
        navigate("/", { replace: true })
    }

    const onClickMypageHandler = (e) => {    
        e.stopPropagation();
        // 토큰이 만료되었을때 다시 로그인
        const token = decodeJwt(window.localStorage.getItem("accessToken"));
        console.log('[Header] onClickMypageHandler token : ', token);
        
        if (token.exp * 1000 < Date.now()) {
            setLoginModal(true);
            return ;
        }

        navigate("/mypage", { replace: true });
    }

    const onClickLogoutHandler = () => {
        window.localStorage.removeItem('accessToken');  
        //로그아웃
        dispatch(callLogoutAPI());
        
        alert('로그아웃이 되어 메인화면으로 이동합니다.');
        navigate("/", { replace: true })
        window.location.reload();
    }

    function BeforeLogin() {

        return (
            <div style={{textAlign:'right', color: 'black', padding:'5px', position:'absolute', bottom:'0', width:'99%'}}>
                <NavLink to="/login" onClick={e=>e.stopPropagation()} style={{color: 'black'}}>로그인</NavLink>  |  <NavLink to="/register" onClick={e=>e.stopPropagation()} style={{color: 'black'}} >회원가입</NavLink>
            </div>
        );
    }

    function AfterLogin() {

        return (            
            <div style={{textAlign:'right', color: 'black', padding:'5px', position:'absolute', bottom:'0', width:'99%'}}>
                <button className={ HeaderCSS.HeaderBtn } onClick={ onClickMypageHandler }>마이페이지</button>  | <button className={ HeaderCSS.HeaderBtn } onClick={ onClickLogoutHandler }>로그아웃</button>
            </div>
        );
    }

    return (
        <>
            { loginModal ? <LoginModal setLoginModal={ setLoginModal }/> : null}
            <div className={ HeaderCSS.HeaderDiv }>
                <div onClick={ onClickLogoHandler } style={{position: 'relative', height: '18vh', width: '100%', background: 'url(/images/header2.png)', cursor:'pointer'}}>
                {/* <img src="images/header.png"
                    className={ HeaderCSS.Logo }
                    
                > */}
                

                {/* 검색 기능 없애기 */}
                {/* <input 
                    className={ HeaderCSS.InputStyle }
                    type="text" 
                    placeholder="검색" 
                    value={ search }
                    onKeyUp={ onEnterkeyHandler }
                    onChange={ onSearchChangeHandler }
                /> */}
                
                {/* </img> */}
                    {/* 로그인 상태에 따라 다른 컴포넌트 랜더링 */}
                    { (isLogin == null || isLogin === undefined) ? <BeforeLogin /> : <AfterLogin />}
                </div>
            </div>
        </>
    );
}

export default Header;