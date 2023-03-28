import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_WINE               = 'WINE/GET_WINE';
export const GET_WINES              = 'WINE/GET_WINES';
export const GET_WINES_RED          = 'WINE/GET_WINES_RED';
export const GET_WINES_WHITE        = 'WINE/GET_WINES_WHITE';
export const GET_WINES_ROSE         = 'WINE/GET_WINES_ROSE';
export const GET_WINES_SPARKLING    = 'WINE/GET_WINES_SPARKLING';
export const POST_WINE              = 'WINE/POST_WINE';
export const PUT_WINE               = 'WINE/PUT_WINE';
export const GET_SALESWINES         = '/GET_SALESWINES';

const actions = createActions({
    [GET_WINE]: () => {},
    [GET_WINES]: () => {},
    [GET_WINES_RED]: () => {},
    [GET_WINES_WHITE]: () => {},
    [GET_WINES_ROSE]: () => {},
    [GET_WINES_SPARKLING]: () => {},
    [POST_WINE]: () => {},
    [PUT_WINE]: () => {},
    [GET_SALESWINES]: () => {}
});

/* 리듀서 */
const wineReducer = handleActions(
    {
        [GET_WINE]: (state, { payload }) => {
            
            return payload;
        },
        [GET_WINES]: (state, { payload }) => {
            
            return payload;
        },
        [GET_WINES_RED]: (state, { payload }) => {
            
            return payload;
        },
        [GET_WINES_WHITE]: (state, { payload }) => {
            
            return payload;
        },
        [GET_WINES_ROSE]: (state, { payload }) => {
            
            return payload;
        },
        [GET_WINES_SPARKLING]: (state, { payload }) => {

            return payload;
        },
        [POST_WINE]: (state, { payload }) => {

            return payload;
        },
        [PUT_WINE]: (state, { payload }) => {

            return payload;
        },
        [GET_SALESWINES] : (state, {payload}) => {

            return payload;
        }
    },
    initialState
);

export default wineReducer;