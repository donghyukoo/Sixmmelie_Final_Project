
import { 
    GET_WINE,
    GET_WINES,
    GET_WINES_RED,
    GET_WINES_WHITE,
    GET_WINES_ROSE,
    GET_WINES_SPARKLING,
    POST_WINE,
    PUT_WINE,
    GET_SALESWINES

} from '../modules/WineModule.js';

// 와인 검색
export const callSearchWineAPI = ({search}) => {
    console.log('[WineAPICalls] callSearchWineAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/search?wineNameKo=${search}`;
    
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        console.log('[WineAPICalls] callSearchWineAPI RESULT : ', result);

        dispatch({ type: GET_WINES,  payload: result.data });
        
    };    
};

/* 와인 등록 */
export const callWineRegistAPI = ({form}) => {
    console.log('[WineAPICalls] callWineRegistAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines`;

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

        console.log('[WineAPICalls] callWineRegistAPI RESULT : ', result);

        dispatch({ type: POST_WINE,  payload: result });
        
    };    
}

/* 와인 수정 */
export const callWineUpdateAPI = ({form}) => {
    console.log('[WineAPICalls] callWineUpdateAPI Call');

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/`;

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

        console.log('[WineAPICalls] callWineUpdateAPI RESULT : ', result);

        dispatch({ type: PUT_WINE,  payload: result });
        
    };    
}

/* 와인 상세 조회 */
export const callWineDetailAPI = ({wineCode}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/${wineCode}`;

    return async (dispatch, getState) => {


        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        console.log('[WineAPICalls] callWineDetailAPI RESULT : ', result);
        if(result.status === 200){
            console.log('[WineAPICalls] callWineDetailAPI SUCCESS');
            dispatch({ type: GET_WINE,  payload: result.data });
        }
        
    };
}

/* 와인 전체 리스트 조회 */
export const callWineListAPI = ({currentPage}) => {
    
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines`;
    }
    
    console.log('[WineAPICalls] requestURL : ', requestURL);

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
            console.log('[WineAPICalls] callWineAPI RESULT : ', result);
            dispatch({ type: GET_WINES,  payload: result.data });
        }
        
    };
}

/* 레드 와인 리스트 조회 */
export const callWineListAboutRedAPI = ({currentPage}) => {
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/red?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/red`;
    }

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
            console.log('[WineAPICalls] callWineListAboutRed RESULT : ', result);
            dispatch({ type: GET_WINES_RED,  payload: result.data });
        }
        
    };
}

/* 화이트 와인 조회 */
export const callWineListAboutWhiteAPI = ({currentPage}) => {
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/white?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/white`;
    }

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
            console.log('[WineAPICalls] callWineListAboutWhite RESULT : ', result);
            dispatch({ type: GET_WINES_WHITE,  payload: result.data });
        }
        
    };
}

/* 로제 와인 조회 */
export const callWineListAboutRoseAPI = ({currentPage}) => {
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/rose?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/rose`;
    }

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
            console.log('[WineAPICalls] callWineListAboutWhite RESULT : ', result);
            dispatch({ type: GET_WINES_ROSE,  payload: result.data });
        }
        
    };
}

/* 스파클링와인 조회 */
export const callWineListAboutSparklingAPI = ({currentPage}) => {
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/sparkling?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/wines/sparkling`;
    }

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
            console.log('[WineAPICalls] callWineListAboutSparkling RESULT : ', result);
            dispatch({ type: GET_WINES_SPARKLING,  payload: result.data });
        }
        
    };
}

// 전체 와인 조회/판매량
export const callWineSalesListAPI = ({currentPage}) => {
    
    let requestURL;

    if(currentPage !== undefined || currentPage !== null){
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/?offset=${currentPage}`;
    }else {
        requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/`;
    }
    
    console.log('[callWineSalesListAPI] requestURL : ', requestURL);

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
            console.log('[WineAcallWineSalesListAPIICalls] callWineSalesListAPI RESULT : ', result);
            dispatch({ type: GET_SALESWINES,  payload: result.data });
        }
        
    };
}

