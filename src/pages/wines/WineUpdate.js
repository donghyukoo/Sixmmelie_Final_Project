import WineRegistrationCSS from './WineRegistration.module.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
    callWineUpdateAPI,
    callWineDetailAPI
} from '../../apis/WineAPICalls';

function WineUpdate() {

    const dispatch = useDispatch();
    const params = useParams();
    const wineDetail  = useSelector(state => state.wineReducer);  
    
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [modifyMode, setModifyMode] = useState(false);

    const imageInput = useRef();
    const navigate = useNavigate();

    const [form, setForm] = useState({});


    useEffect(        
        () => {
            console.log('[WineUpdate] wineCode : ', params.wineCode);

            dispatch(callWineDetailAPI({	
                wineCode: params.wineCode
            }));                     
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
            wineCode: wineDetail.wineCode,
            wineNameKo: wineDetail.wineNameKo,
            wineNameEn: wineDetail.wineNameEn,
            winePrice: wineDetail.winePrice,
            categoryCode: wineDetail.categoryCode,
            wineStock: wineDetail.wineStock,
            wineContent: wineDetail.wineContent,
        });
    }

    /* form 데이터 세팅 */  
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickWineUpdateHandler = () => {

        console.log('[WIneUpdate] onClickWineUpdateHandler');

        const formData = new FormData();
        formData.append("wineCode", form.wineCode);
        formData.append("wineNameKo", form.wineNameKo);
        formData.append("wineNameEn", form.wineNameEn);
        formData.append("winePrice", form.winePrice);
        formData.append("categoryCode", form.categoryCode);
        formData.append("wineStock", form.wineStock);
        formData.append("wineContent", form.wineContent);

        if(image){
            formData.append("wineImg", image);
        }

        dispatch(callWineUpdateAPI({	// 상품 정보 업데이트
            form: formData
        }));         

        alert('상품을 수정했습니다.');
        navigate('/wines/'+params.wineCode, { replace: true});
    }
    
    return (
        <div>

            <div>
                <button
                    className={ WineRegistrationCSS.wineUpdateBackBtn }
                    onClick={ () => navigate(-1) }            
                >
                    돌아가기
                </button>
                {!modifyMode &&
                    <button
                        className={ WineRegistrationCSS.wineUpdateUpBtn }   
                        onClick={ onClickModifyModeHandler }             
                    >
                        수정모드
                    </button>
                }
                {modifyMode &&
                    <button
                        className={ WineRegistrationCSS.wineUpdateInsertBtn }   
                        onClick={ onClickWineUpdateHandler }             
                    >
                        저장하기
                    </button>
                }
            </div>        
            {wineDetail &&

            <div className={ WineRegistrationCSS.productSection }>
                <div className={ WineRegistrationCSS.productInfoDiv }>
                    <div className={ WineRegistrationCSS.productImageDiv }>
                        { wineDetail && <img 
                            className={ WineRegistrationCSS.productImage } 
                            src={ (imageUrl == null) ? wineDetail.wineImg : imageUrl } 
                            alt="preview"
                        />}
                        <input                
                            style={ { display: 'none' }}
                            type="file"
                            name='wineImage' 
                            accept='image/jpg,image/png,image/jpeg,image/gif'
                            onChange={ onChangeImageUpload }
                            ref={ imageInput }                            
                        />
                        <button 
                            className={ WineRegistrationCSS.wineImageButton }
                            onClick={ onClickImageUpload }    
                            style={ !modifyMode ? { backgroundColor: 'gray'} : null}
                        >
                            이미지 업로드
                            </button>
                    </div>
                </div>
                <div className={ WineRegistrationCSS.productInfoDiv }>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>와인명(한)</label></td>
                                <td>
                                    <input 
                                        name='wineNameKo'
                                        placeholder='와인명(한)'
                                        value={ (!modifyMode ? wineDetail.wineNameKo : form.wineNameKo) || ''}
                                        className={ WineRegistrationCSS.productInfoInput }
                                        onChange={ onChangeHandler }
                                        readOnly={ modifyMode ? false : true }
                                        style={ !modifyMode ? { backgroundColor: 'gray'} : null}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>와인명(영)</label></td>
                                <td>
                                    <input 
                                        name='wineNameEn'
                                        placeholder='와인명(영)'
                                        value={ (!modifyMode ? wineDetail.wineNameEn : form.wineNameEn) || ''}
                                        className={ WineRegistrationCSS.productInfoInput }
                                        onChange={ onChangeHandler }
                                        readOnly={ modifyMode ? false : true }
                                        style={ !modifyMode ? { backgroundColor: 'gray'} : null}
                                    />
                                </td>
                            </tr>  
                            <tr>
                                <td><label>상품가격</label></td>
                                <td>
                                    <input 
                                        name='winePrice'
                                        placeholder='상품 가격'
                                        value={(!modifyMode ? wineDetail.winePrice : form.winePrice) || ''}
                                        type='number'
                                        className={ WineRegistrationCSS.productInfoInput }
                                        onChange={ onChangeHandler }
                                        readOnly={ modifyMode ? false : true }
                                        style={ !modifyMode ? { backgroundColor: 'gray'} : null}
                                    />
                                </td>
                            </tr>       
                             <tr>
                                <td><label>상품 종류</label></td>
                                <td>
                                    {/* categoryCode = 1:레드, 2:화이트, 3:로제, 4:스파클링 */}
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } readOnly={ modifyMode ? false : true } checked={ (!modifyMode ? wineDetail.categoryCode : form.categoryCode) == 1 ? true : false } value={1}/> 레드</label> &nbsp;
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } readOnly={ modifyMode ? false : true } checked={ (!modifyMode ? wineDetail.categoryCode : form.categoryCode) == 2 ? true : false } value={2}/> 화이트</label> &nbsp;
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } readOnly={ modifyMode ? false : true } checked={ (!modifyMode ? wineDetail.categoryCode : form.categoryCode) == 3 ? true : false } value={3}/> 로제</label> &nbsp;
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } readOnly={ modifyMode ? false : true } checked={ (!modifyMode ? wineDetail.categoryCode : form.categoryCode) == 4 ? true : false } value={4}/> 스파클링</label> &nbsp;
                                </td>                                
                            </tr>
                            <tr>
                                <td><label>상품 재고</label></td>
                                <td>
                                <input 
                                        placeholder='상품 재고'
                                        type='number'
                                        name='wineStock'
                                        value={ (!modifyMode ? wineDetail.wineStock : form.wineStock) || 0}
                                        onChange={ onChangeHandler }
                                        readOnly={ modifyMode ? false : true }
                                        className={ WineRegistrationCSS.productInfoInput }
                                        style={ !modifyMode ? { backgroundColor: 'gray'} : null}
                                    />
                                </td>
                            </tr> 
                            <tr>
                                <td><label>상품 설명</label></td>
                                <td>
                                    <textarea 
                                        className={ WineRegistrationCSS.textAreaStyle }
                                        name='wineDescription'
                                        onChange={ onChangeHandler }
                                        readOnly={ modifyMode ? false : true }
                                        value={ (!modifyMode ? wineDetail.wineContent : form.wineContent) || ''}
                                        style={ !modifyMode ? { backgroundColor: 'gray'} : null}
                                    ></textarea>
                                </td>
                            </tr> 
                        </tbody>                        
                    </table>
                </div>
            </div>
            }

        </div>
    );
}

export default WineUpdate;