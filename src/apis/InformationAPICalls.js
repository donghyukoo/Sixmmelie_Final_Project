
import { 
    GET_INFORMATION,
    GET_INFORMATIONS,
    POST_INFORMATION,
    PUT_INFORMATION
} from '../modules/InformationModule.js';

/* 검색 */ 
export const callSearchInfoAPI = ({search}) => {
    console.log('[InformationAPICalls] callSearchInfoAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/information/search?title=${search}`;
    
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json());

        console.log('[InformationAPICalls] callSearchInfoAPI RESULT : ', result);

        dispatch({ type: GET_INFORMATION,  payload: result.data });
        
    };    
};

/* 메인에서 글쓰기 */ 
export const callInfoRegistAPI = ({form}) => {
    console.log('[InformationAPICalls] callInfoRegistAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/information`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
        .then(response => response.json());

        console.log('[InformationAPICalls] callInfoRegistAPI RESULT : ', result);

        dispatch({ type: POST_INFORMATION,  payload: result });
        
    };    
}

/* 상세화면에서 수정모드 */
export const callInformationUpdateAPI = ({form}) => {
    console.log('[InformationAPICalls] callInformationUpdateAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/information`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: form
        })
        .then(response => response.json());

        console.log('[InformationAPICalls] callInformationUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_INFORMATION,  payload: result });
        
    };    
}

/* 상세페이지조회 */
export const callInformationDetailAPI = ({infoNo}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/information/${infoNo}`;

    return async (dispatch, getState) => {


        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json());

        console.log('[InformationAPICalls] callInformationDetailForAdminAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[InformationAPICalls] callInformationDetailForAdminAPI SUCCESS');
            dispatch({ type: GET_INFORMATION,  payload: result.data });
        }

    };
}

/* 전체리스트조회 */ 
export const callInfoListAPI = ({currentPage}) => {
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/informations?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/informations`;
    }
    
    console.log('[InformationAPICalls] requestURL : ', requestURL);

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());
        if(result.status === 200){
            console.log('[InformationAPICalls] callInfoListAPI RESULT : ', result);
            dispatch({ type: GET_INFORMATIONS,  payload: result.data });
        }
        
    };
}


