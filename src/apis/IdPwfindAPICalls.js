import {    
    POST_IDPWFIND
} from '../modules/IdPwfindModule.js';

export const callIdfindAPI = ({form}) => {
    console.log('[IdPwfindAPICalls] callIdfindAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/idfind`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "*/*",
                //"Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json());

        console.log('[IdPwfindAPICalls] callIdfindAPI RESULT : ', result);

        dispatch({ type: POST_IDPWFIND,  payload: result });
        
    };    
}

export const callPwFindAndUpdateAPI = ({form}) => {
    console.log('[IdPwfindAPICalls] callPwFindAndUpdateAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/pwfind`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Accept": "*/*",
                //"Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json());

        console.log('[IdPwfindAPICalls] callPwFindAndUpdateAPI RESULT : ', result);

        dispatch({ type: POST_IDPWFIND,  payload: result });
        
    };    
}