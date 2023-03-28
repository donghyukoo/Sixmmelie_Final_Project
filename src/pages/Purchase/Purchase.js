import PurchaseCSS from './Purchase.module.css';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';

import {
    callPurchaseAPI
} from '../../apis/PurchaseAPICalls'

import {
  callGetMemberAPI
} from '../../apis/MemberAPICalls'

function Purchase() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wine  = useSelector(state => state.wineReducer);  
    const member = useSelector(state => state.memberReducer);
    const memberDetail = member.data;  
    const token = decodeJwt(window.localStorage.getItem("accessToken"));    

    const { search } = useLocation();
    const { amount } = queryString.parse(search);

    /* 폼 데이터 한번에 변경 및 State에 저장 */
    const [form, setForm] = useState({
        wineCode: wine.wineCode,        
        memberId: token.sub,
        orderPhone: '',
        orderAddress: '',        
        orderAmount: parseInt(amount)
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    useEffect(
      () => {   
          if(token !== null) {
              dispatch(callGetMemberAPI({
                  memberId: token.sub
              }));            
          }
      }
      ,[]
  );

    if(wine.length < 1){
        alert('잘못된 접근입니다');
        return <Navigate to="/"/>;
    }
       
        function onClickPayment() {

          /* 1. 가맹점 식별하기 */
          const { IMP } = window;
          IMP.init('imp02606476');
      
          /* 2. 결제 데이터 정의하기 */
          const data = {
            pg: 'kakaopay',                                // PG사
            pay_method: 'card',                            // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
            amount: amount * wine.winePrice,               // 결제금액
            name: '육믈리에',                               // 주문명
            buyer_name: memberDetail.memberName,           // 구매자 이름
            buyer_tel: memberDetail.memberPhone,           // 구매자 전화번호
            buyer_addr: memberDetail.memberAddress         // 구매자 주소
          };

          if(form.orderMember === '' || form.orderPhone === '' || form.orderAddress === '')
          { alert('정보를 전부 입력해주세요.');
              return ;
          }
        
          /* 4. 결제 창 호출하기 */
          IMP.request_pay(data, callback);
        }

        /* 3. 콜백 함수 정의하기 */
        function callback(response) {
          const {
            success,
            merchant_uid,
            error_msg
          } = response;
      
          if (success) {
            alert('결제 성공');
            dispatch(callPurchaseAPI({	
              form: form
            }));
            navigate("/", { replace: true });  
          } else {
            alert(`결제 실패: ${error_msg}`);
          }
        }

        return (
          <div className={ PurchaseCSS.purchaseDiv }>
              <div className={ PurchaseCSS.purchasInfoDiv }>
                  <h2>주문자 정보</h2>
                    <input 
                      name='orderMember'
                      placeholder='주문자 아이디'
                      onChange={ onChangeHandler }
                      value= { memberDetail && memberDetail.memberName || ''}
                      className={ PurchaseCSS.purchaseInput }
                  />
                  <input 
                      name='orderPhone'
                      placeholder='핸드폰번호'
                      onChange={ onChangeHandler }
                      className={ PurchaseCSS.purchaseInput }
                  />
                  <input 
                      placeholder='배송정보'
                      name='orderAddress'
                      onChange={ onChangeHandler }
                      className={ PurchaseCSS.purchaseInput }
                  />
              </div>
              <div className={ PurchaseCSS.purchasInfoDiv1 }>
                  <h2>결제 정보</h2>
                  <table>
                      <colgroup>
                          <col width="25%" />
                          <col width="75%" />
                      </colgroup>
                      <tbody>
                          <tr>
                              <th>상품명</th>
                              <td>{ wine.wineNameKo }</td>
                          </tr>
                          <tr>
                              <th>상품갯수</th>
                              <td>{ amount }개</td>
                          </tr>    
                          <tr>
                              <th>결제금액</th>
                              <td>{ amount * wine.winePrice }원</td>
                          </tr>    
                          <tr>
                              <td colSpan={ 2 }>
                                <button onClick={onClickPayment}>결제하기</button>
                              </td>
                          </tr>    
                      </tbody>                    
                  </table>
              </div>
          </div>
      );
  };
    
export default Purchase;