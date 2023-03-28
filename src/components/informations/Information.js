import InfoCSS from './Info.module.css';
import { useNavigate } from 'react-router-dom';

function Information({ information : {infoNo, infoTitle, infoMember,infoDate}}) {

    const navigate = useNavigate();

    const onClickInfoHandler = (infoNo) => {
        navigate(`/info/${infoNo}`, { replace: false });
    }

    return (
        <div 
            className={ InfoCSS.infoDiv }
            onClick={ () => onClickInfoHandler(infoNo) }
        >
            {/* <img src={ infoImg } alt="테스트" /> */}
            <h5>{ infoNo }</h5>
            <h5>{ infoTitle }</h5>
            <h5>{ infoMember?.memberName }</h5>
            <h5>{ infoDate }</h5>

        </div>
    );
}
export default Information;