import InfoRegistrationCSS from './InfoRegistration.module.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    callInformationDetailAPI,
    callInformationUpdateAPI
} from '../../apis/InformationAPICalls';

function InfoUpdate() {

    const dispatch = useDispatch();
    const params = useParams();
    const infoDetail  = useSelector(state => state.infoReducer);  
    
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [modifyMode, setModifyMode] = useState(false);

    const imageInput = useRef();
    const navigate = useNavigate();

    const [form, setForm] = useState({});


    useEffect(        
        () => {
            console.log('InfoUpdate] infoNo : ', params.infoNo);
            dispatch(    callInformationDetailAPI,
                ({	
                    infoNo: params.infoNo
            }));

            console.log('infoDetail>>>', infoDetail)
        }
    ,[]);

    useEffect(() => {
        
        /* 이미지 업로드시 미리보기 세팅 */
        if(image){
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if( result ){
                    setImageUrl(result);
                }
            }
            fileReader.readAsDataURL(image);
        }
    },
    [image]);


    const onChangeImageUpload = (e) => {
        console.log(e.target.files[0]);
        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        if(modifyMode){
            imageInput.current.click();
        }
    }
    
    const onClickModifyModeHandler = () => {    // 수정모드
        setModifyMode(true);
        setForm({
            infoImage: infoDetail.infoImage,
            infoTitle: infoDetail.infoTitle,
            infoDetail: infoDetail.infoDetail
        });
    }

    /* form 데이터 세팅 */  
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickinfoUpdateHandler = () => {

        console.log('[infoUpdate] onClickinfoUpdateHandler');

        const formData = new FormData();
        formData.append("infoNo", params.infoNo);
        formData.append("infoTitle", form.infoTitle);
        formData.append("infoDetail", form.infoDetail);
        //formData.append("memberNo", params.infoMember.memberNo);

        if(image){
            formData.append("infoImage", image);
        }

        dispatch(callInformationUpdateAPI({	// 상품 정보 업데이트
            form: formData
        }));         

        alert('등록되었습니다.');
        navigate('/info-detail/'+params.infoNo, { replace: true});
    }

    return (
        <div>     
            {infoDetail &&

            <div className={ InfoRegistrationCSS.infoSection }>
                <div className={ InfoRegistrationCSS.infoInfoDiv }>
                    <div className={ InfoRegistrationCSS.infoImageDiv }>
                        { infoDetail && <img 
                            className={ InfoRegistrationCSS.infoImage } 
                            src={ (imageUrl == null) ? infoDetail.infoImg : imageUrl } 
                            alt="preview"
                        />}
                        <input                
                            style={ { display: 'none' }}
                            type="file"
                            name='infoImage' 
                            accept='image/jpg,image/png,image/jpeg,image/gif'
                            onChange={ onChangeImageUpload }
                            ref={ imageInput }                            
                        />
                        <button 
                            className={ InfoRegistrationCSS.infoImageButton }
                            onClick={ onClickImageUpload } 
                        >
                            이미지 업로드
                            </button>
                    </div>
                </div>
                <div className={ InfoRegistrationCSS.infoInfoDiv }>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>제목</label></td>
                                <td>
                                    <input 
                                        name='infoTitle'
                                        placeholder='제목'
                                        value={ (!modifyMode ? infoDetail.infoTitle : form.infoTitle) || ''}
                                        className={ InfoRegistrationCSS.infoInfoInput }
                                        onChange={ onChangeHandler }
                                        readOnly={ modifyMode ? false : true }
                                    />
                                </td>
                            </tr>    
                            <tr>
                                <td><label>내용</label></td>
                                <td>
                                    <textarea
                                        name='infoDetail'
                                        placeholder='내용'
                                        value={(!modifyMode ? infoDetail.infoDetail : form.infoDetail) || 0 }
                                        className={ InfoRegistrationCSS.infotextarea }
                                        onChange={ onChangeHandler }
                                        readOnly={ modifyMode ? false : true }
                                    />
                                </td>
                            </tr> 
                        </tbody>                        
                    </table>
                </div>
            </div>
            }
            <div className={ InfoRegistrationCSS.infoButtonDiv }>
                <button        
                    onClick={ () => navigate(-1) }            
                >
                    뒤로가기
                </button>
                {!modifyMode &&
                    <button       
                        onClick={ onClickModifyModeHandler }             
                    >
                        수정
                    </button>
                }
                {modifyMode &&
                    <button       
                        onClick={ onClickinfoUpdateHandler }             
                    >
                        상품 수정 저장
                    </button>
                }
            </div>   

        </div>
    );
}

export default InfoUpdate;