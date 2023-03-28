import Wine from "../../components/wines/Wine";
import AllCSS from './All.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

import {
    callWineListAboutSparklingAPI
} from '../../apis/WineAPICalls'
import { GET_WINES_SPARKLING } from '../../modules/WineModule';

function Sparkling() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const sparklingwines = useSelector(state => state.wineReducer); 
    const sparklingList = sparklingwines.data;

    const pageInfo = sparklingwines.pageInfo;

    const [currentPage, setCurrentPage] = useState(1);

    const pageNumber = [];
    
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            dispatch(callWineListAboutSparklingAPI({
                currentPage: currentPage
            }));            
        }
        ,[currentPage]
    );


    return (
        <>
            <div className={ AllCSS.wineDiv }>
            { 
                Array.isArray(sparklingList) && sparklingList.map((wines) => (<Wine key={ wines.wineCode } wine={ wines } />))
            }
            </div>
            <div style={{ listStyleType: "none", display: "flex" }}>
                { Array.isArray(sparklingList) &&
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
                { Array.isArray(sparklingList) &&
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

export default Sparkling;