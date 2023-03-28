import WineCSS from './Wine.module.css';
import { useNavigate } from 'react-router-dom';

function Wine({ wine : {wineCode, wineImg, wineNameKo, wineNameEn, wineSales}}) {

    const navigate = useNavigate();

    const onClickWineHandler = (wineCode) => {
        navigate(`/wines/${wineCode}`, { replace: false });
    }

    return (
        <div 
            className={ WineCSS.wineDiv }
            onClick={ () => onClickWineHandler(wineCode) }
        >
            <img src={ wineImg } alt="이미지 준비 중입니다." />
            <h5>판매량: { wineSales }</h5>
            <h5>{ wineNameKo }</h5>
            <h5>{ wineNameEn }</h5>
        </div>
    );
}

export default Wine;