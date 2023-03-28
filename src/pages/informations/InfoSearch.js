import InfoCSS from './Info.module.css';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import Information from '../../components/informations/Information';

import {
    callSearchInfoAPI
} from '../../apis/InformationAPICalls';


function Search() {

    const { search} = useLocation();
    const { value } = queryString.parse(search);
    const informations = useSelector(state => state.infoReducer); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callSearchInfoAPI({
            search: value
        }));        
    },
    []);

    return (
        <div className={ InfoCSS.infoDiv }>
            { 
               informations.length > 0 && informations.map((information) => (<Information key={information.infoNo } information={ information } />))
            }
        </div>
    );
}

export default Search;