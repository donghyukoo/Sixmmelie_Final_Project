import WineRegistrationCSS from './WineRegistration.module.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
    callWineRegistAPI
} from '../../apis/WineAPICalls';

function WineRegistration() {


    const dispatch = useDispatch();

    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        wineNameKo: '',
        wineNameEn: '',
        wineArea: '',
        winePrice: 0,
        wineCategoryCode: 0,
        wineStock: 0, 
        wineSales: 0,
        alcoholLevel: 0,
        categoryCode: 0,
        nationCode: 0,
        wineContent: '',

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

    const onClickWineRegistrationHandler = () => {

        console.log('[WineRegistration] onClickWineRegistrationHandler');

        const formData = new FormData();

        formData.append("wineNameKo", form.wineNameKo);
        formData.append("wineNameEn", form.wineNameEn);
        formData.append("wineArea", form.wineArea);
        formData.append("wineContent", form.wineContent);
        formData.append("winePrice", form.winePrice);
        formData.append("wineStock", form.wineStock);
        formData.append("wineSales", form.wineSales);
        formData.append("alcoholLevel", form.alcoholLevel);
        formData.append("wineCategoryCode", form.wineCategoryCode);
        formData.append("categoryCode", form.categoryCode);
        formData.append("nationCode", form.nationCode);

        if(image){
            formData.append("wineImage", image);
        }

        dispatch(callWineRegistAPI({	// 상품 상세 정보 조회
            form: formData
        }));        
        
        alert('와인 리스트로 이동합니다.');
        navigate('/wines', { replace: true});
        window.location.reload();
    }
    

    return (
        <div>
                <button
                    className={ WineRegistrationCSS.backButton }
                    onClick={ () => navigate(-1) }            
                >
                    돌아가기
                </button>
            <div className={ WineRegistrationCSS.wineSection }>
                <div className={ WineRegistrationCSS.wineInfoDiv }>
                    <div className={ WineRegistrationCSS.wineImageDiv }>
                        { imageUrl && <img 
                            className={ WineRegistrationCSS.wineImage } 
                            src={ imageUrl } 
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
                        >
                            이미지 업로드
                            </button>
                    </div>
                </div>      

                <div className={ WineRegistrationCSS.wineInfoDiv }>
                    <table>
                        <tbody>
                            <tr>
                                <td><label>와인명(한)</label></td>
                                <td>
                                    <input 
                                        name='wineNameKo'
                                        placeholder='와인명(한)'
                                        className={ WineRegistrationCSS.wineInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>와인명(영)</label></td>
                                <td>
                                    <input 
                                        name='wineNameKo'
                                        placeholder='와인명(영)'
                                        className={ WineRegistrationCSS.wineInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>생산지역</label></td>
                                <td>
                                    <input 
                                        name='wineArea'
                                        placeholder='생산지역'
                                        className={ WineRegistrationCSS.wineInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>재고</label></td>
                                <td>
                                    <input 
                                        name='wineStock'
                                        placeholder='재고'
                                        className={ WineRegistrationCSS.wineInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>도수</label></td>
                                <td>
                                    <input 
                                        name='alcoholLevel'
                                        placeholder='도수'
                                        className={ WineRegistrationCSS.wineInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><label>생산국가</label></td>
                                <td>
                                    <input 
                                        name='nationCode'
                                        placeholder='나라'
                                        className={ WineRegistrationCSS.wineInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td><label>가격</label></td>
                                <td>
                                    <input 
                                        name='wineNameEn'
                                        placeholder='와인가격'
                                        type='number'
                                        className={ WineRegistrationCSS.wineInfoInput }
                                        onChange={ onChangeHandler }
                                    />
                                </td>
                            </tr>       
                            <tr>
                                <td><label>종류</label></td>
                                <td>
                                    {/* categoryCode = 1:레드, 2:화이트, 3:로제, 4:스파클링 */}
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } value="1"/> 레드</label> &nbsp;
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } value="2"/> 화이트</label> &nbsp;
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } value="3"/> 로제</label> &nbsp;
                                    <label><input type="radio" name="categoryCode" onChange={ onChangeHandler } value="4"/> 스파클링</label>
                                </td>
                            </tr> 
                            <tr>
                                <td><label>와인 설명</label></td>
                                <td>
                                    <textarea 
                                        className={ WineRegistrationCSS.textAreaStyle }
                                        name='wineContent'
                                        onChange={ onChangeHandler }
                                    ></textarea>
                                </td>
                            </tr> 
                        </tbody>                        
                    </table>
                </div>
            </div>
            <button
                    className={ WineRegistrationCSS.insertButton }
                    onClick={ onClickWineRegistrationHandler }             
                >
                    상품 등록
            </button>
        </div>
    );
}

export default WineRegistration;