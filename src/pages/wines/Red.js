import Wine from "../../components/wines/Wine";
import AllCSS from './All.module.css';
import { redirect, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import {
    callWineListAboutRedAPI
} from '../../apis/WineAPICalls'
import { GET_WINES_RED } from '../../modules/WineModule';

function Red() {
    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const redwines = useSelector(state => state.wineReducer); 
    const redList = redwines.data;

    const pageInfo = redwines.pageInfo;

    const [currentPage, setCurrentPage] = useState(1);

    const pageNumber = [];
    
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(callWineListAboutRedAPI({
                currentPage: currentPage
            }));            
        }
        ,[currentPage]
    );

    return (
        <>
            <div className={ AllCSS.wineDiv }>
            { 
                Array.isArray(redList) && redList.map((wines) => (<Wine key={ wines.wineCode } wine={ wines } />))
            }
            </div>
            <div style={{ listStyleType: "none", display: "flex" }}>
                { Array.isArray(redList) &&
                <button 
                    onClick={() => setCurrentPage(currentPage - 1)} 
                    disabled={currentPage === 1}
                    className={ AllCSS.pagingBtn }
                >
                    &lt;
                </button>
                }
                {pageNumber.map((num) => (
                <li key={num} onClick={() => setCurrentPage(num)}>
                    <button
                        style={ currentPage === num ? {backgroundColor : "rgba(53, 52, 53, 0.625)" } : null}
                        className={ AllCSS.pagingBtn }
                    >
                        {num}
                    </button>
                </li>
                ))}
                { Array.isArray(redList) &&
                <button 
                    className={ AllCSS.pagingBtn }
                    onClick={() => setCurrentPage(currentPage + 1)} 
                    disabled={currentPage === pageInfo.pageEnd  || pageInfo.total == 0}
                >
                    &gt;
                </button>
                }
            </div>
        </>
    );
}

export default Red;