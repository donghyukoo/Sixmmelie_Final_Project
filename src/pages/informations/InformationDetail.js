import InformationDetailCSS from './InformationDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { decodeJwt } from '../../utils/tokenUtils';
import {
    callInformationDetailAPI
} from '../../apis/InformationAPICalls';
import LoginModal from '../../components/common/LoginModal';

function InfoDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const information   = useSelector(state => state.infoReducer);  
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
            dispatch(callInformationDetailAPI({	
                infoNo: params.infoNo
            }));            
        }
        ,[]
    );

    const onClickModifyHandler = () => {
        navigate(`/info-update/${params.infoNo}`, { replace: false });
    };

    // const onClickReviewHandler = () => {
    //     navigate(`/review/${params.infoNo}`, { replace: false });
    // };

    return (
        <div>
            { loginModal ? <LoginModal setLoginModal={ setLoginModal }/> : null}
            <div className={ InformationDetailCSS.DetailDiv }>
                <div className={ InformationDetailCSS.descriptionDiv }>
                    <div>
                        <button 
                            className={ InformationDetailCSS.modiButton }       
                            onClick={ () => navigate(-1) }            
                        >
                            뒤로가기
                        </button>

                        {!modifyMode &&  decoded === 'ROLE_ADMIN' &&
                            <button
                                className={ InformationDetailCSS.modiButton }       
                                onClick={ onClickModifyHandler }             
                            >
                                수정모드
                            </button>
                        }
                    </div>
                    <h1 style={{textAlign: 'center'}}>{ information.infoTitle || '' }</h1><br/>
                    <h3><pre style={{textAlign: 'left'}}>{ information.infoDetail || '' }</pre></h3>
                </div>
            </div>
                <div className={ InformationDetailCSS.imgDiv }>
                    <img src={ information.infoImg } alt="테스트" />
                    {/* <button
                        className={ InformationDetailCSS.reviewBtn }
                        onClick={ onClickReviewHandler }
                    >
                        리뷰보기
                    </button> */}
                </div>
        </div>
    );
}

export default InfoDetail;