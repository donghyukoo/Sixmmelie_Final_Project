
import { 
    GET_MEMBER
  , POST_LOGIN
  , POST_REGISTER
  , PUT_MEMBER
} from '../modules/MemberModule';

export const callGetMemberAPI = ({memberId}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/members/${memberId}`;

    return async (dispatch, getState) => {

        // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
        // 서버에서 cors 허용을 해주어야 함
        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken") 
            }
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);

        dispatch({ type: GET_MEMBER,  payload: result });
        
    };
}

export const callLoginAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/auth/login`;

    return async (dispatch, getState) => {

        /* 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능 */
        /* 서버에서 cors 허용을 해주어야 함 */
        /* headers에 Access-Control-Allow-Origin을 *로 해서 모든 도메인에 대해 허용한다. */
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"      
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberPw: form.memberPw
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callLoginAPI RESULT : ', result);
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });
        
    };
}


export const callLogoutAPI = () => {
    

    return async (dispatch, getState) => {            

        dispatch({ type: POST_LOGIN,  payload: '' });        
        console.log('[MemberAPICalls] callLogoutAPI RESULT : SUCCESS');
    };
}


/*  */
export const callRegisterAPI = ({
    memberName: memberName,
    memberId: memberId,
    memberPw: memberPw,
    memberBirthDate: memberBirthDate,
    memberAddress: memberAddress,
    memberPhone: memberPhone,
    memberEmail: memberEmail
}) => {
    // console.log('@@@@@@@@@@@')
    // console.log(memberName);  // 온클릭 레지스터 핸들러가 정상적으로 동작 했다면 나올 로그 (스테이트값이변경되서 넘어오면)
    // console.log(memberId);
    // console.log(memberPw);
    // console.log(memberBirthDate);
    // console.log(memberAddress);
    // console.log(memberPhone);
    // console.log(memberEmail);
    // console.log('진짜 여기까지 값이 넘어 온건가?')
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/auth/signup`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                memberName: memberName,
                memberId: memberId,
                memberPw: memberPw,
                memberBirthDate: memberBirthDate,
                memberAddress: memberAddress,
                memberPhone: memberPhone,
                memberEmail: memberEmail                
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);        
        
        if(result.status === 201){
            dispatch({ type: POST_REGISTER,  payload: result });
            alert("회원가입이 완료되었습니다.")
        }        
    };
}