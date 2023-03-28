import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = [];

/* 액션 */
export const POST_IDPWFIND          = 'IdPwfind/POST_IDPWFIND';

const actions = createActions({
    [POST_IDPWFIND ]: () => {}
});

/* 리듀서*/
const idPwReducer = handleActions(
    {
        [POST_IDPWFIND]: (state, { payload }) => {
            
            return payload;
        }            
    },
    initialState
);

export default idPwReducer;