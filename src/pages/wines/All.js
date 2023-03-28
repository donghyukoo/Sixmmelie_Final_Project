import Wine from "../../components/wines/Wine";
import AllCSS from './All.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';

import {
    callWineListAPI,
    callSearchWineAPI
} from '../../apis/WineAPICalls'
import { GET_WINES } from '../../modules/WineModule';

function All() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const wines = useSelector(state => state.wineReducer, shallowEqual); 
    const wineList = wines.data;
    const pageInfo = wines.pageInfo;

    const [search, setSearch] = useState('');
    const [modifyMode, setModifyMode] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumber = [];

    const isLogin = window.localStorage.getItem('accessToken');
    let decoded = null;

    if(isLogin !== undefined && isLogin !== null) {
        const temp = decodeJwt(window.localStorage.getItem("accessToken"));
        console.log(temp);
        decoded = temp.auth[0];
    }
    
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd ; i++){
            pageNumber.push(i);
        }
    }

    const onClickWineInsert = () => {
        console.log('[All] onClickWineInsert');
        navigate("/wine/registration", { replace: false});
    }

    const onSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const onEnterkeyHandler = (e) => {
        if (e.key == 'Enter') {
            console.log('Enter key', search);
            
            // navigate(`/wines?value=${search}`, { replace: false });
            
            dispatch(callSearchWineAPI({
                search: search
            }));

            // window.location.reload();
        }
    }

    useEffect(
        () => {
            dispatch(callWineListAPI({
                currentPage: currentPage
            }));            
        }
        ,[currentPage]
    );

    return (
        <>
            <div className={ AllCSS.winesDiv }>
                {!modifyMode && decoded === 'ROLE_ADMIN' &&
                <div className={ AllCSS.InsertBtn }>              
                    <button
                        onClick={ onClickWineInsert }
                    >
                        와인 등록
                    </button>
                
                </div>
                 }
            <div>
                <input
                    className={ AllCSS.wineSearch }
                    type="text" 
                    placeholder="와인 검색"
                    value={ search }
                    onKeyUp={ onEnterkeyHandler }
                    onChange={ onSearchChangeHandler }
                />
            </div>
            <div className={ AllCSS.wineDiv }>
            { 
                Array.isArray(wineList) && wineList.map((wines) => (<Wine key={ wines.wineCode } wine={ wines } />))
            }
            
            </div>
            </div>
            <div style={{ listStyleType: "none", display: "flex" }}>
                { Array.isArray(wineList) &&
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
                { Array.isArray(wineList) &&
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

export default All;