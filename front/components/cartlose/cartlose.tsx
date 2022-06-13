import style from "../../styles/CartLose/cartlose.module.css";
import win from "../../public/images/two-removebg-preview.png";
import imgme from "../../public/images/profile.jpg";
const CartLose = (props:any) => {
  return (
    <div className={style.container}>
      <div className={style.gameover}>
        <p className={style.Pgame}>GAME <span className={style.spanover}>OVER</span></p>
      </div>
      <div className={style.row}>
        <div className={style.row1}>
          <div className={style.content}>
            <div className={style.child1}>
              <div className={style.divwin}>
                <img src={win.src} className={style.winicon}></img>
              </div>
              <p className={style.Congra}>
                We Are Sorry...
                <span className={style.usertext}>{props.userName}</span>
              </p>
              <div className={style.allimg}>
                <img src={props.img} className={style.usericon}></img>
              </div>
            </div>
            <div className={style.twolastP}>
              <p className={style.scor}>
                SCORE : <span className={style.scornbr}>{props.score}</span>
              </p>
            </div>
            <p className={style.youwin}>YOU LOSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartLose;
