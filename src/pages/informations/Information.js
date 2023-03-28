import InfoCSS from './Info.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect, useState, useRef } from "react";
import { decodeJwt } from '../../utils/tokenUtils';

import{
    callInfoListAPI
} from '../../apis/InformationAPICalls';
import{
    callSearchInfoAPI
} from '../../apis/InformationAPICalls';

function Info() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const informations  = useSelector(state => state.infoReducer, shallowEqual);
    const infoList = informations.data;
    const pageInfo = informations.pageInfo;

    const [search, setSearch] = useState('');
    const [start, setStart ] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    const isLogin = window.localStorage.getItem('accessToken');
    let decoded = null;

    if(isLogin !== undefined && isLogin !== null) {
        const temp = decodeJwt(window.localStorage.getItem("accessToken"));
        console.log(temp);
        decoded = temp.auth[0];
    }

    const infoSearchChangeHandler = (e) => {
        setSearch(e.target.value);
    }

    const infoEnterkeyHandler = (e) => {
        if (e.key == 'Enter') {
            console.log('Enter key', search);
            dispatch(callSearchInfoAPI({
                search: search
            }));
        }
    }

    const pageNumber = [];
    if(pageInfo){
        for(let i = 1; i <= pageInfo.pageEnd; i++){
            pageNumber.push(i);
        }
    }

    useEffect(
        () => {
            setStart((currentPage - 1) * 1);            
            dispatch(callInfoListAPI({
                currentPage: currentPage
            }));            
        }
        ,[currentPage]
    );

    const onClickInfoInsert = () => {
        console.log('[Information] onClickInfoInsert');  
        navigate("/info-registration", { replace: false })
    }

    const onClickTableTr = (infoNo) => {
        if(isLogin == undefined && isLogin == null) {
            alert('로그인 후 보여집니다.');
            navigate(`/login`, { replace: false });
        }
        if(isLogin !== undefined && isLogin !== null) {
        navigate(`/info-detail/${infoNo}`, { replace: false });
        }
    }

    return (
        <>
        <div className={ InfoCSS.bodyDiv }>
            { decoded === 'ROLE_ADMIN' &&
            <div className={ InfoCSS.buttonDiv }>
                <button
                    onClick={ onClickInfoInsert }
                    >
                    글쓰기
                </button>
            </div>            
                }
            <table className={ InfoCSS.infoTable }>
                <colgroup>
                    <col width="10%" />
                    <col width="50%" />
                    <col width="20%" />
                    <col width="20%" />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    { Array.isArray(infoList) && infoList.map((p) => (
                        <tr
                            key={ p.infoNo }
                            onClick={ () => onClickTableTr(p.infoNo) }
                        >
                            <td>{ p.infoNo }</td>
                            <td>{ p.infoTitle }</td>
                            <td>{ p.infoMember?.memberName}</td>
                            <td>{ p.infoDate }</td>
                        </tr>
                    )) 
                    }
                </tbody>                    
            </table>         
            
        </div>
        <div style={{ listStyleType: "none", display: "flex"}}>
            { Array.isArray(infoList) &&
            <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
                className={ InfoCSS.pagingBtn }
            >
                &lt;
            </button>
            }
            {pageNumber.map((num) => (
            <li key={num} onClick={() => setCurrentPage(num)}>
                <button
                    // style={ currentPage === num ? {backgroundColor : 'ButtonShadow' } : null}
                    className={ InfoCSS.pagingBtn }
                >
                    {num}
                </button>
            </li>
            ))}
            { Array.isArray(infoList) &&
            <button 
                className={ InfoCSS.pagingBtn }
                onClick={() => setCurrentPage(currentPage + 1)} 
                disabled={currentPage === pageInfo.pageEnd || pageInfo.total == 0}
            >
                &gt;
            </button>
            }
        </div>
        <div>
            <input
                className={ InfoCSS.InputStyle }
                type="text" 
                placeholder="검색" 
                value={ search }
                onKeyUp={ infoEnterkeyHandler }
                onChange={ infoSearchChangeHandler }
            />
        </div>
        </>
    );
}

export default Info;