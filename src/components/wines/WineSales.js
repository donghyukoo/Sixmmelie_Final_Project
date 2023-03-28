import { useNavigate } from 'react-router-dom';
import WineSalesCSS from './WineSales.module.css';

function WineSales({ sale : {wineCode, wineImg, wineNameKo, winePrice, wineSales}}) {
    
    const navigate = useNavigate();
    const onClickWineHandler = (wineCode) => {
        navigate(`/wines/${wineCode}`, { replace: false });
    }

    return (
        <div 
            className={ WineSalesCSS.wineSalesDiv }
                onClick={ () => onClickWineHandler(wineCode) }
        >
            <img src={ wineImg } alt="테스트이미지" />
            <h4 className={WineSalesCSS.h4}>{ wineNameKo }</h4>
            <h4 className={WineSalesCSS.h4}>{ winePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }원</h4>
            <h4 className={WineSalesCSS.h4}>판매량: { wineSales }개</h4>
        </div>
    );
}

export default WineSales;