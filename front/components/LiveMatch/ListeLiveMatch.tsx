import style from '../../styles/watchMatch/livelisteMatch.module.css'
import Image from 'next/image'
import imge from '../../public/images/profile.jpg'

const LiveListMatch = (props:any) =>{
    return (
        <div className={style.listeMtch}>
            <div className={style.player1}>
                <div className={style.imagediv}><img src={props.data.playerpic1} className={style.img}/></div>
                <p className={style.userName}>{props.data.player1}</p>
            </div>
            <p className={style.Vs}>VS</p>
            <div className={style.player2}>
                <div className={style.imagediv}><img  src={props.data.playerpic2} className={style.img}/></div>
                <p className={style.userName}>{props.data.player2}</p>
            </div>
            <button className={style.watch}>Watch</button>
        </div>
    )
};
export default LiveListMatch;