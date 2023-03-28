import Wine from "../../components/wines/Wine";
import AllCSS from './All.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import {
    callWineListAboutRoseAPI
} from '../../apis/WineAPICalls'
import { GET_WINES_Rose } from '../../modules/WineModule';

function Rose() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const rosewines = useSelector(state => state.wineReducer); 
    const roseList = rosewines.data;

    const pageInfo = rosewines.pageInfo;

    const [currentPage, setCurrentPage] = useState(1);

    const pageNumber = [];

    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(callWineListAboutRoseAPI({
                currentPage: currentPage
            }));            
        }
        ,[currentPage]
    );

    return (
        <>
            <div className={ AllCSS.wineDiv }>
            { 
                Array.isArray(roseList) && roseList.map((wines) => (<Wine key={ wines.wineCode } wine={ wines } />))
            }
            </div>
            <div style={{ listStyleType: "none", display: "flex" }}>
                { Array.isArray(roseList) &&
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
                { Array.isArray(roseList) &&
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

export default Rose;