import RegisterCSS from './Register.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import {
    callRegisterAPI
} from '../../apis/MemberAPICalls'
import { POST_LOGIN } from '../../modules/MemberModule';

function Register() {

    const navigate = useNavigate();

    /* 리덕스를 이용하기 위한 디스패처, 셀렉터 선언 */
    const dispatch = useDispatch();
    const member = useSelector(state => state.memberReducer);  // API 요청하여 가져온 loginMember 정보

    const [memberName, setmemberName] = useState('');
    const [memberId, setmemberId] = useState('');
    const [memberPw, setmemberPw] = useState('');
    const [memberBirthDate, setmemberBirthDate] = useState('');
    const [memberAddress, setmemberAddress] = useState('');
    const [memberPhone, setmemberPhone] = useState('');
    const [memberEmail, setmemberEmail] = useState('');


    const [memberNameValid, setmemberNameValid] = useState(false);
    const [memberIdValid, setmemberIdValid] = useState(false);
    const [memberPwValid, setmemberPwValid] = useState(false);
    const [memberBirthDateValid, setmemberBirthDateValid] = useState(false);
    const [memberAddressValid, setmemberAddressValid] = useState(false);
    const [memberPhoneValid, setmemberPhoneValid] = useState(false);
    const [memberEmailValid, setmemberEmailValid] = useState(false);


    const handlememberName = (e) => {
        // console.log('********************************************');
        // console.log('값이 바뀌나' + handlememberName);
        // console.log('네임값: ' + e.target.name);
        // console.log('벨류값: ' + e.target.value);

        setmemberName(e.target.value);
        const regex = 
        /^[ㄱ-ㅎ|가-힣]+$/
        if(regex.test(memberName)){
            setmemberNameValid(true);
        } else {
            setmemberNameValid(false);
        }
    }

    const handlememberId = (e) => {
        // console.log('********************************************');
        // console.log('값이 바뀌나' + handlememberId);
        // console.log('네임값: ' + e.target.name);
        // console.log('벨류값: ' + e.target.value);

        setmemberId(e.target.value);
        const regex = 
        /^[a-zA-Z]*$/
        if(regex.test(memberId)){
            setmemberIdValid(true);
        } else {
            setmemberIdValid(false);
        }
    }

    const handlememberPw = (e) => {
        // console.log('********************************************');
        // console.log('값이 바뀌나' + handlememberPw);
        // console.log('네임값: ' + e.target.name);
        // console.log('벨류값: ' + e.target.value);

        setmemberPw(e.target.value);
        const regex = 
        /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/
        if(regex.test(memberPw)){
            setmemberPwValid(true);
        } else {
            setmemberPwValid(false);
        }
    }

    const handlememberBirthDate = (e) => {
        // console.log('********************************************');
        // console.log('값이 바뀌나' + handlememberBirthDate);
        // console.log('네임값: ' + e.target.name);
        // console.log('벨류값: ' + e.target.value);

        setmemberBirthDate(e.target.value);
        const regex = 
        /^[0-9]+$/
        if(regex.test(memberBirthDate)){
            setmemberBirthDateValid(true);
        } else {
            setmemberBirthDateValid(false);
        }
    }

    const handlememberAddress = (e) => {
        // console.log('********************************************');
        // console.log('값이 바뀌나' + handlememberAddress);
        // console.log('네임값: ' + e.target.name);
        // console.log('벨류값: ' + e.target.value);

        setmemberAddress(e.target.value);
        const regex = 
        /^(?=.*[가-힣])(?=.*[0-9]).{10,}$/
        if(regex.test(memberAddress)){
            setmemberAddressValid(true);
        } else {
            setmemberAddressValid(false);
        }
    }

    const handlememberPhone = (e) => {
        // console.log('********************************************');
        // console.log('값이 바뀌나' + handlememberPhone);
        // console.log('네임값: ' + e.target.name);
        // console.log('벨류값: ' + e.target.value);

        setmemberPhone(e.target.value);
        const regex = 
        /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{3}$/
        if(regex.test(memberPhone)){
            setmemberPhoneValid(true);
        } else {
            setmemberPhoneValid(false);
        }
    }
    
    const handlememberEmail = (e) => {
        // console.log('********************************************');
        // console.log('값이 바뀌나' + handlememberEmail);
        // console.log('네임값: ' + e.target.name);
        // console.log('벨류값: ' + e.target.value);
        
        setmemberEmail(e.target.value);
        const regex = 
        /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        if(regex.test(memberEmail)){
            setmemberEmailValid(true);
        } else {
            setmemberEmailValid(false);
        }
    }

    useEffect(() => {

        if(member.status == 201){
            console.log("[Login] Register SUCCESS {}", member);
            navigate("/login", { replace: true })
        }
    },
    [member]);


    const onClickBackHandler = () => {

        /* 돌아가기 클릭시 메인 페이지로 이동 */
        navigate("/", { replace: true })
    }
    
    const onClickRegisterHandler = () => {
        if(memberNameValid && memberIdValid && memberPwValid && memberBirthDateValid
            && memberAddressValid && memberPhoneValid && memberEmailValid){
            dispatch(callRegisterAPI({
                memberName: memberName,
                memberId: memberId,
                memberPw: memberPw,
                memberBirthDate: memberBirthDate,
                memberAddress: memberAddress,
                memberPhone: memberPhone,
                memberEmail: memberEmail
            }));
        }
    }

    return (
        <div className={ RegisterCSS.backgroundDiv}>
        <div className={ RegisterCSS.registerDiv }>
        <div className={ RegisterCSS.errorMessage}>
                <h1>회원가입</h1>

                <label>이름</label>
                    <div>
                        <input 
                            type="text" 
                            name="memberName"
                            placeholder="이름을 입력해주세요" 
                            autoComplete='off'
                            value={memberName}
                            onChange={ handlememberName } 
                        />
                    </div>    
                    <div className="RegisterCSS.errorMessage">
                        {!memberNameValid && memberName.length > 0 && (
                            <div>이름은 한글로만 작성해주세요</div>
                        )}
                    </div>
                <label>아이디</label>
                    <div>
                        <input 
                            type="text" 
                            name="memberId"
                            placeholder="아이디는 영문으로만 작성해주세요" 
                            autoComplete='off'
                            value={memberId}
                            onChange={ handlememberId }
                        />
                    </div>
                    <div className="Register.module.css.errorMessage">
                        {!memberIdValid && memberId.length > 0 && (
                            <div>아이디는 영문으로만 작성 가능합니다.</div>
                        )}
                    </div>
                <label>비밀번호</label>
                    <div>
                        <input 
                            type="password"
                            name="memberPw" 
                            placeholder="비밀번호를 입력해주세요." 
                            autoComplete='off'
                            value={memberPw}
                            onChange={ handlememberPw }
                        />
                    </div>
                <div className="Register.module.css.errorMessage">
                    {!memberPwValid && memberPw.length > 0 && (
                        <div>비밀번호는 9자이상 영문,숫자를 조합해주세요.</div>
                    )}
                </div>
                <label>생년월일</label>
                    <div>
                        <input 
                            type="text"
                            name="memberBirthDate" 
                            placeholder="생년월일을 입력해주세요 ex) 980731" 
                            autoComplete='off'
                            value={memberBirthDate}
                            onChange={ handlememberBirthDate }
                        />
                    </div>
                <div className="Register.module.css.errorMessage">
                    {!memberBirthDateValid && memberBirthDate.length > 0 && (
                        <div>-를 제외한 생년월일6자리를 입력해주세요.</div>
                    )}
                </div>
                <label>주소</label>
                <div>
                    <input 
                        type="text"
                        name="memberAddress" 
                        placeholder="주소를 입력해주세요" 
                        autoComplete='off'
                        value={memberAddress}
                        onChange={ handlememberAddress }
                    />
                </div>
                <div className="Register.module.css.errorMessage">
                    {!memberAddressValid && memberAddress.length > 0 && (
                        <div> 주소는 한글과 숫자만 입력해주세요.</div>
                    )}
                </div>
                <label>핸드폰</label>
                <div>
                    <input 
                        type="text"
                        name="memberPhone" 
                        placeholder="핸드폰번호를 입력해주세요" 
                        autoComplete='off'
                        value={memberPhone}
                        onChange={ handlememberPhone }
                    />
                </div>
                <div className="Register.module.css.errorMessage">
                    {!memberPhoneValid && memberPhone.length > 0 && (
                        <div>-를 포함한 핸드폰 번호를 입력해주세요</div>
                    )}
                </div>
                <label>이메일</label>
                <div>
                    <input 
                        type="text" 
                        name="memberEmail"
                        placeholder="이메일을 입력해주세요" 
                        autoComplete='off'
                        onChange={ handlememberEmail }
                    /> 
                </div>
                <div className="Register.module.css.errorMessage">
                    {!memberEmailValid && memberEmail.length > 0 && (
                        <div>'@'를 사용해 Email양식에 맞게 작성해주세요.</div>
                    )}
                </div>
                <button
                    onClick = { onClickRegisterHandler }
                >   
                    회원가입
                </button>
                <button
                    onClick = { onClickBackHandler }
                >
                    돌아가기
                </button>
            </div>
        </div>
        </div>
    );
}

export default Register;