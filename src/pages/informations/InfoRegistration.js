import infoRegistrationCSS from './InfoRegistration.module.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { decodeJwt } from '../../utils/tokenUtils';
import {
    callInfoRegistAPI
} from '../../apis/InformationAPICalls';

function InfoRegistration() {


    const dispatch = useDispatch();

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const loginInfo     = useSelector(state => state.memberReducer); 
    
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    const navigate = useNavigate();

    const [form, setForm] = useState({
        memberNo: 1,
        infoTitle: '',
        infoDetail: '',

    });

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

        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickInfoRegistrationHandler = () => {

        console.log('[infoRegistration] onClickInfoRegistrationHandler');

        const formData = new FormData();

        formData.append("memberNo", 1);
        formData.append("infoTitle", form.infoTitle);
        formData.append("infoDetail", form.infoDetail);

        if(image){
            formData.append("infoImage", image);
        }

        dispatch(callInfoRegistAPI({	// 상품 상세 정보 조회
            form: formData
        }));        
        
        alert('INFORMATION으로 이동합니다.');
        navigate('/info-management', { replace: true});
        window.location.reload();
    }
    

    return (
        <div>       
            <div className={ infoRegistrationCSS.infoSection }>
                <div className={ infoRegistrationCSS.infoInfoDiv }>
                    <div className={ infoRegistrationCSS.infoImageDiv }>
                        { imageUrl && <img 
                            className={ infoRegistrationCSS.infoImage } 
                            src={ imageUrl} 
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
                            className={ infoRegistrationCSS.infoImageButton }
                            onClick={ onClickImageUpload } 
                        >
                            이미지 업로드
                            </button>
                    </div>
                </div>
                <div className={ infoRegistrationCSS.infoInfoDiv }>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>제목</label></td>
                                <td>
                                    <input 
                                        name='infoTitle'
                                        placeholder='제목'
                                        className={ infoRegistrationCSS.infoInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>    
                            <tr>
                                <td><label>내용</label></td>
                                <td>
                                    <textarea
                                        name='infoDetail'
                                        placeholder='내용'
                                        className={ infoRegistrationCSS.textAreaStyle }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>    
                            
                        </tbody>                        
                    </table>
                </div>
            </div>
            <div className={ infoRegistrationCSS.infoButtonDiv }>
                <button        
                    onClick={ () => navigate(-1) }            
                >
                    뒤로가기
                </button>
                <button       
                    onClick={ onClickInfoRegistrationHandler }             
                >
                    게시글 등록
                </button>
            </div> 
        </div>
    );
}

export default InfoRegistration;