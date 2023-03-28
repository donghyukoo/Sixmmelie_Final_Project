import WineDetailCSS from './WineDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';

import {
    callWineDetailAPI
} from '../../apis/WineAPICalls';
import LoginModal from '../../components/common/LoginModal';

function WineDetail() {    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const wine  = useSelector(state => state.wineReducer);
    
    const [amount, setAmount] = useState(1);
    const [modifyMode, setModifyMode] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const isLogin = window.localStorage.getItem('accessToken');
    let decoded = null;

    if(isLogin !== undefined && isLogin !== null) {
        const temp = decodeJwt(window.localStorage.getItem("accessToken"));
        console.log(temp);
        decoded = temp.auth[0];
    }
    
    useEffect(
        () => {
            dispatch(callWineDetailAPI({	// 상품 상세 정보 조회
                wineCode: params.wineCode
            }));            
        }
        ,[]
    );

    const onClickModifyHandler = () => {
        navigate(`/wine/update/${params.wineCode}`, {replace: false});
    }

    const onChangeAmountHandler = (e) => {
        setAmount(e.target.value);
    }

    const onClickPurchaseHandler = () => {

        /* 로그인 상태인지 확인 */
        const token = decodeJwt(window.localStorage.getItem("accessToken"));

        if(token === undefined || token === null) {
            alert('로그인이 필요합니다.');
            navigate(`/login`)
            return;
        }

        /* 토큰이 만료되었을때 다시 로그인 */
        if (token.exp * 1000 < Date.now()) {
            setLoginModal(true);
            return;
        }
        
        /* 1개 이상만 구매 가능 */
        if(amount <= 0) {
            alert('1개 이상 구매하실 수 있습니다.')
            return;
        }

        /* 구매 가능 수량 확인 */
        if(amount > wine.wineStock) {
            alert('재고량을 확인해주세요');
            return;
        }

        navigate(`/purchase?amount=${amount}`, { replace: false });
    }

    return (
        <div>
            { loginModal ? <LoginModal setLoginModal={ setLoginModal }/> : null}
            <div className={ WineDetailCSS.DetailDiv }>
                <div className={ WineDetailCSS.DetailBtn }>
                    <button
                        className={ WineDetailCSS.BackBtn}
                        onClick={ () => navigate(-1)}
                    >
                        뒤로가기
                    </button>

                    {!modifyMode && decoded === 'ROLE_ADMIN' &&
                        <button
                            className={ WineDetailCSS.UpdateBtn }                      
                            onClick={ onClickModifyHandler}
                        >
                            수정하기
                        </button>
                    }
                </div>

                <div className={ WineDetailCSS.imgDiv }>
                    <img src={ wine.wineImg } alt="테스트" />
                </div>
                <hr/>
                
                <div>
                <h5>현재 구매 가능한 재고는 {wine.wineStock}병입니다</h5>
                    <input
                        className={ WineDetailCSS.PurchaseInput }
                        type='number'
                        onChange = { onChangeAmountHandler }
                        defaultValue='1'
                    />     
          
                <button
                    className={ WineDetailCSS.PurchaseBtn }
                        onClick= { onClickPurchaseHandler }
                >
                    바로구매
                </button>   
                </div>    
                <div className={ WineDetailCSS.descriptionDiv }>
                    <table className={ WineDetailCSS.descriptionTable}>
                        <tbody>                
                            <tr>
                                <th  colSpan={ 1 }>{ wine.wineNameKo || '' }</th>
                            </tr>
                            <tr>
                                <th  colSpan={ 1 }>{ wine.wineNameEn || '' }</th>
                            </tr>
                            <tr>
                                <th  colSpan={ 1 }>{ '알콜도수 ' + wine.alcoholLevel + '%'|| 0 }</th>
                            </tr> 
                            <tr>
                                <th colSpan={ 1 }>{ wine.winePrice || '' }원</th>    
                                {/* <th  colSpan={ 1 }>{ wine.winePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') || '' }원</th> */}
                            </tr>
                            <tr className={ WineDetailCSS.wineContent}> 
                                <td colSpan={ 2 }>{ wine.wineContent || ''}</td>
                            </tr>
                        </tbody>                    
                    </table>
                </div>
            </div>
        </div>
    );
}

export default WineDetail;