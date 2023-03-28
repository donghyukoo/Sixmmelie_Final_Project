import LoginCSS from './Login.module.css';
import IdPwfind from './IdPwFind.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { POST_REGISTER } from '../../modules/MemberModule';
import {
    callLoginAPI
} from '../../apis/MemberAPICalls'
import { POST_LOGIN } from '../../modules/MemberModule';

import { 
    callIdfindAPI,
    callPwFindAndUpdateAPI
 } from '../../apis/IdPwfindAPICalls';

function Login() {
        
    const navigate = useNavigate();

    /* 리덕스를 이용하기 위한 디스패처, 셀렉터 선언 */
    const dispatch = useDispatch();
    const loginMember = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보
    const findIdPw = useSelector(state => state.idPwReducer);

    const  [state, setState] = useState({
        fadeId:'',
        isFadeIn: false
    });

    /* 폼 데이터 한번에 변경 및 State에 저장 */   
    const [form, setForm] = useState({
        memberName: '',
        memberEmail: '',
        memberId: '',
        memberPw: ''
    });

    useEffect(() => {
        
        if(loginMember.status === 200){
            console.log("[Login] Login SUCCESS {}", loginMember);
            navigate("/", { replace: true });
        }

        /* 회원 가입 후 로그인 페이지로 안내 되었을 때 */
        if(loginMember.status === 201){

            loginMember.status = 100  // Continue
            dispatch({ type: POST_REGISTER,  payload: loginMember });
        } 
        
        //아이디 비번찾기 라디오 셋팅
        let tabmenu1 = document.getElementById("tabmenu1");
        tabmenu1.checked = true;
    }
    ,[loginMember]);
    
    /* 로그인 상태일 시 로그인페이지로 접근 방지 */
    if(loginMember.length > 0) {
        console.log("[Login] Login is already authenticated by the server");        
        return <Navigate to="/"/>
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickRegisterHandler = () => { 
        navigate("/register", { replace: true })
    }

    //아이디/비밀번호찾기 클릭
    const onClickIdPwSearchHandler = () => { 
       
        var target = '#layer2';
        layer_popup(target);
    }

    function layer_popup(target){
        let el = document.querySelector(target);    //레이어의 id를 $el 변수에 저장
        let isDim = el.parentNode.classList.valueOf('dimBg');    //dimmed 레이어를 감지하기 위한 boolean 변수
        if(isDim) {
            setState({
                ...state,
                fadeId:target,
                isFadeIn: true
            });   
        }
        setTimeout(() => {
            var elWidth = ~~(el.clientWidth),
                elHeight = ~~(el.clientHeight),
                docWidth = document.body.scrollWidth,
                docHeight = document.body.scrollHeight;
                
            // 화면의 중앙에 레이어를 띄운다.
            if (elHeight < docHeight || elWidth < docWidth) {
                el.style.marginTop = elHeight /2;
                el.style.marginLeft = elWidth/2;
            } else {
                el.style.top = 0;
                el.style.left = 0;
            }
        }
        , 100);
    }

    const onClickIdPwFindCloseHandler = () => {
        let el = document.querySelector(state.fadeId);    //레이어의 id를 $el 변수에 저장
        let isDim = el.parentNode.classList.valueOf('dimBg');    //dimmed 레이어를 감지하기 위한 boolean 변수
        if(isDim) {
            setState({
                ...state,
                fadeId:'',
                isFadeIn: false
            });   
        }
        //닫기시 input value값 초기화 필요
        document.querySelector("#memberId").value = '';
        document.querySelector("#memberName").value = '';
        document.querySelector("#memberEmail").value = '';
        //return false;
    }

    //아이디 찾기 클릭
    const onClickidHandler = () => {
       /* 밸리데이션 구문 찾아서 하기 */ 
       if(form.memberName === '' || form.memberEmail === '')
       { alert('입력되지 않았습니다. 정확히 입력해 주세요');
           return ;
       }    
        alert('입력하신 이메일로 아이디를 전송하였습니다. 이메일을 확인해 주세요!')     
        dispatch(callIdfindAPI({
            form: form
        }));
    }
    //패스워드 찾기 클릭
    const onClickpwHandler = () => {
        if(form.memberId === '' || form.memberEmail === '')
       { alert('입력되지 않았습니다. 정확히 입력해 주세요');
           return ;
       }    
        alert('입력하신 이메일로 임시비밀번호를 전송하였습니다. 이메일을 확인해 주세요!')
        dispatch(callPwFindAndUpdateAPI({
            form: form
        }));
    }

    /* 로그인 버튼 클릭시 디스패처 실행 및 메인 페이지로 이동 */
    const onClickLoginHandler = () => { 
        
        dispatch(callLoginAPI({	// 로그인
            form: form
        }));
    }

    return (
        <div>
            <div className={ LoginCSS.backgroundDiv}>
                <div className={ LoginCSS.loginDiv }>
                    <h1>Sign in</h1>
                    <input 
                        type="text" 
                        name='memberId'
                        placeholder="아이디" 
                        autoComplete='off'
                        onChange={ onChangeHandler }
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                onClickLoginHandler();
                            }
                        }}
                    />
                    <input 
                        type="password"
                        name='memberPw' 
                        placeholder="패스워드" 
                        autoComplete='off'
                        onChange={ onChangeHandler }
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                onClickLoginHandler();
                            }
                        }}
                        
                    />
                    <a
                        onClick={ onClickLoginHandler }
                    >
                        로그인
                    </a>
                    <div className={ LoginCSS.memDiv}>
                        <button
                            // style={ { border: 'none', margin: 0, fontSize: '10px', height: '10px',textAlign:'left', cursor:'pointer',display: block } }
                            onClick={ onClickIdPwSearchHandler }
                            >
                            아이디/비밀번호찾기
                        </button>
                        <button
                            // style={ { border: 'none', margin: 0, fontSize: '10px', height: '10px',textAlign:'right', cursor:'pointer',display: block } }
                            onClick={ onClickRegisterHandler }
                            >
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
      
           {/* 아이디 비밀번호 찾기 로직 */}          

            <div className={[IdPwfind.dimlayer, (state.isFadeIn ? IdPwfind.fadeIn : IdPwfind.fadeOut)].join(" ")}>
                <div className={IdPwfind.dimBg}>
                    <div className={IdPwfind.poplayer} id="layer2">
                        <div className={IdPwfind.popcontainer}>
                            <div className={IdPwfind.popconts}>
                                <div className={IdPwfind.tabmenuDiv}>
                                    <ul>
                                    <li id="tab1"> 
                                    <input type="radio" name="tabmenu" id="tabmenu1"/>
                                    <label for="tabmenu1">아이디 찾기</label>
                                    <div className={IdPwfind.tabCon} >
                                    <input 
                                        type="text" 
                                        id="memberName"
                                        name="memberName"
                                        placeholder="이름입력" 
                                        autoComplete='off'
                                        onChange={ onChangeHandler }
                                    />
                                    <input 
                                        type="text" 
                                        id="memberEmail"
                                        name="memberEmail"
                                        placeholder="이메일입력" 
                                        autoComplete='off'
                                        onChange={ onChangeHandler }
                                    />                                    
                                    <div>
                                    <button
                                        onClick = { onClickidHandler }
                                    >   
                                        찾기
                                    </button>
                                    <button
                                        onClick = { onClickIdPwFindCloseHandler }
                                    >
                                        취소
                                    </button>
                                    </div>
                                    </div> 
                                 </li>
                                    <li id="tab2" className={IdPwfind.btnCon}>
                                    <input type="radio" name="tabmenu" id="tabmenu2" />
                                    <label for="tabmenu2">비밀번호 찾기</label>
                                    <div className={IdPwfind.tabCon} >
                                    <input 
                                        type="text"
                                        id="memberId" 
                                        name="memberId" 
                                        placeholder="아이디 입력" 
                                        autoComplete='off'
                                        onChange={ onChangeHandler }
                                    />
                                    <input 
                                        type="text" 
                                        id="memberEmail"
                                        name="memberEmail"
                                        placeholder="이메일입력" 
                                        autoComplete='off'
                                        onChange={ onChangeHandler }
                                    />                                    
                                    <div>
                                    <button style={{backgroundColor:'rgb(167, 18, 18)',color:'white'}}
                                        onClick = { onClickpwHandler }
                                    >   
                                        찾기
                                    </button>
                                    <button style={{backgroundColor:'rgb(167, 18, 18)',color:'white'}}
                                        onClick = { onClickIdPwFindCloseHandler }
                                    >
                                        취소
                                    </button>
                                    </div>
                                    </div> 
                                    </li>
                                    </ul>
                                </div>                            
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;