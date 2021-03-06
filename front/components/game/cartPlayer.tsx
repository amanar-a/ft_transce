import  style from '../../styles/game/CartPlayer.module.css'

export const Player = (props:any) =>{
    return(
        <div className={style.Container}>
            <div>
                <img src={props.img} className={style.imageUser}/>
            </div>
            <div className={style.UserName}>{props.name}</div>
            <div className={style.Score}>
                <p className={style.Pscore}>Score</p>
                <h3 className={style.score}>{props.score}</h3>
            </div>
        </div>
    )
}

export const Player2 = (props:any) =>{
    return(
        <div className={style.Container2}>
            <img src={props.img} className={style.imageUser}/>
            <div className={style.UserName}>{props.name}</div>
            <div className={style.Score1}>
                <p className={style.Pscore}>Score</p>
                <h3 className={style.score}>{props.score}</h3>
            </div>
        </div>
    )
}
