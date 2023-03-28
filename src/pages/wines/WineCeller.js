import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Wine from "../../components/wines/Wine";
import MainCSS from './Main.module.css';


import {
    callWineListAboutWineCellerAPI
} from '../../apis/WineAPICalls';

function WineCeller() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const wineCellerList = useSelector(state => state.wineReducer); 

    useEffect(
        () => {
            dispatch(callWineListAboutWineCellerAPI());            
        }
        ,[]
    );

    return (
        <div className={ MainCSS.wineDiv }>
            { 
               WineCeller.length > 0 && wineCellerList.map((wineCeller) => (<Wine key={ wineCeller.wineCode } wine={ wineCeller } />))
            }
        </div>
    );
}

export default WineCeller;