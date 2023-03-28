
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';

// import { Navigate } from "react-router-dom";
import IdPwfind from './IdPwFind.module.css';
// import RegisterCSS from './Register.module.css';
import { 
    callIdfindAPI,
    callPwFindAndUpdateAPI
 } from '../../apis/IdPwfindAPICalls';

function IdPwFind() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const findIdPw = useSelector(state => state.idPwReducer);  
    const [form, setForm] = useState({
        memberName: '',
        memberId: '',
        memberEmail: ''
    });
    useEffect(() => {
        if(findIdPw.status == 201){
            alert('이메일을 확인해 주세요')            
            // navigate("/", { replace: true })
        }
    },
    [findIdPw]);

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };    

    const onClickBackHandler = () => {

        /* 돌아가기 클릭시 메인 페이지로 이동 */
        navigate("/", { replace: true })
    }
    
    const onClickidHandler = () => {
        dispatch(callIdfindAPI({
            form: form
        }));
    }
    const onClickpwHandler = () => {
        dispatch(callPwFindAndUpdateAPI({
            form: form
        }));
    }

    return (
        
        // <div className={ RegisterCSS.backgroundDiv}>
        //     <div className={ RegisterCSS.registerDiv }>
            //  <div className={IdPwfind.dimlayer}>
            <div className={IdPwfind.dimBg}>
             <div className={IdPwfind.poplayer}>
                 <div className={IdPwfind.popcontainer}>
                     <div className={IdPwfind.popconts}>
                <h1>아이디/비밀번호 찾기</h1>
                <button>아이디 찾기</button>
                 <input 
                    type="text" 
                    name="memberName"
                    placeholder="이름입력" 
                    autoComplete='off'
                    onChange={ onChangeHandler }
                />
                    <input 
                        type="text" 
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
                        onClick = { onClickBackHandler }
                    >
                        취소
                    </button>
                </div>
                    <button>비밀번호 찾기</button>
                <input 
                    type="text"
                    name="memberId" 
                    placeholder="아이디 입력" 
                    autoComplete='off'
                    onChange={ onChangeHandler }
                />
                <input 
                        type="text" 
                        name="memberEmail"
                        placeholder="이메일입력" 
                        autoComplete='off'
                        onChange={ onChangeHandler }
                    />
                <div>
                    <button
                        onClick = { onClickpwHandler }
                    >   
                        찾기
                    </button>
                    <button
                        onClick = { onClickBackHandler }
                    >
                        취소
                    </button>
                </div>
             </div>
         </div>

                     </div>
                 </div>
            //  </div>
        //  </div>
       
        
    );
}

export default IdPwFind;