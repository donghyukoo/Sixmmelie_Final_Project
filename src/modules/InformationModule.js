import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_INFORMATION           = 'information/GET_INFORMATION';
export const GET_INFORMATIONS          = 'information/GET_INFORMATIONS';
export const POST_INFORMATION           = 'information/POST_INFORMATION';
export const PUT_INFORMATION            = 'information/PUT_INFORMATION';

const actions = createActions({
    [GET_INFORMATION ]: () => {},
    [GET_INFORMATIONS]: () => {},
    [POST_INFORMATION ]: () => {},
    [PUT_INFORMATION ]: () => {}
});

/* 리듀서*/
const infoReducer = handleActions(
    {
        [GET_INFORMATION]: (state, { payload }) => {
            
            return payload;
        },
        [GET_INFORMATIONS]: (state, { payload }) => {
            
            return payload;
        },
        [POST_INFORMATION]: (state, { payload }) => {

            return payload;
        },
        [PUT_INFORMATION]: (state, { payload }) => {

            return payload;
        }        
    },
    initialState
);

export default infoReducer;