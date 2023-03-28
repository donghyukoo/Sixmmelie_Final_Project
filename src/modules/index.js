import { combineReducers } from 'redux';
import memberReducer from './MemberModule';
import wineReducer from './WineModule';
import purchaseReducer from './PurchaseModule';
import infoReducer from './InformationModule';
import idPwReducer from './IdPwfindModule';
import surveyReducer from './SurveyModule';


const rootReducer = combineReducers({
    memberReducer,
    wineReducer,
    purchaseReducer,
    infoReducer,
    idPwReducer,
    surveyReducer
});

export default rootReducer;
