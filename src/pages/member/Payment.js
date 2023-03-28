import PaymentCSS from './Payment.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';
import { useNavigate } from 'react-router-dom';

import {
    callPurchaseListAPI
} from '../../apis/PurchaseAPICalls'


function Payment() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const purchase = useSelector(state => state.purchaseReducer);  
    const purchaseList = purchase.data;
    const token = decodeJwt(window.localStorage.getItem("accessToken"));   

    useEffect(
        () => {    
            if(token !== null) {
                dispatch(callPurchaseListAPI({	// 구매 정보 조회
                    memberId: token.sub
                }));            
            }
        }
        ,[]
    );

    return (
        <>
            <div className={ PaymentCSS.paymentDiv }>
                <table className={ PaymentCSS.paymentTable }>
                    <colgroup>
                        <col width="20%" />
                        <col width="40%" />
                        <col width="20%" />
                        <col width="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>주문일자</th>
                            <th>주문 상품 정보</th>
                            <th>수량</th>
                            <th>총 주문 금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        { purchaseList && purchaseList.map(
                            (purchase) => (
                                <tr
                                    key={ purchase.orderCode }
                                >
                                    <td>{ purchase.orderDate }</td>
                                    <td onClick={(e) => {
                                           navigate(`/wines/${purchase.wine.wineCode}`, { replace: true });
                                        }  
                                        }style={{width: "100px"}}>{ purchase.wine.wineNameKo }</td>                  
                                    <td>{ purchase.orderAmount }</td>              
                                    <td>{ purchase.wine.winePrice * purchase.orderAmount }</td>
                                </tr>
                            )
                        )}
                        
                    </tbody>                    
                </table>            
            </div>
        </>
    );
}

export default Payment;