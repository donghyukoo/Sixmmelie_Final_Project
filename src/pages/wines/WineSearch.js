import AllCSS from './All.module.css';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Wine from "../../components/wines/Wine";

import {
    callSearchWineAPI
} from '../../apis/WineAPICalls';

function Search() {

    const { search } = useLocation();
    const { value } = queryString.parse(search);
    const wines = useSelector(state => state.wineReducer); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callSearchWineAPI({
            search: value
        }));        
    },
    []);

    return (
        <div className={ AllCSS.wineSearch }>
            { 
               wines.length > 0 && wines.map((wine) => (<Wine key={ wine.wineCode } wine={ wine } />))
            }
        </div>
    );
}

export default Search;