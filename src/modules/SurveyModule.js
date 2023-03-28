import { createActions, handleActions } from 'redux-actions';

const initialState = [];

export const GET_SURVEY = '/GET_SURVEY';

const actions = createActions({
    [GET_SURVEY]: () => {}
})

const surveyReducer = handleActions({

    [GET_SURVEY]: (state, {palyload}) => {

        return palyload;
    }
},
    initialState
);

export default surveyReducer;