/* 서베이 조건 조회 */
import { GET_SURVEY } from './../modules/SurveyModule';

export const callWineSurveyAPI = ({nationCode, winePrice, alcoholLevel}) => {
    const requestParam = 'nationCode='+nationCode+'&winePrice='+winePrice+'&alcoholLevel='+alcoholLevel;
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8666/api/v1/survey?`+requestParam;

    return async (dispatch, getState) => {


        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },

        })
        .then(response => response.json());

        if(result.status === 200){
            console.log('[WineAPICalls] callWineSurveyAPI SUCCESS');
            //return dispatch({ type: GET_SURVEY,  payload: result.data });
            return result.data;
        }
        
    };
}