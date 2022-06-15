import style from '../../styles/watchMatch/livematch.module.css'
import LiveListMatch from './ListeLiveMatch'
import data from '../../achievement.json'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Watch (props:any) {
    const [liveGame, changeLiveGame] = useState([])

    useEffect(()=>{
        axios.get(`http://${process.env.NEXT_PUBLIC_IP_ADRESSE}:${process.env.NEXT_PUBLIC_PORT}/livegames`).then((res) =>{
          console.log(res.data)
          res.data.forEach((element:any) => {
              axios.post( `http://${process.env.NEXT_PUBLIC_IP_ADRESSE}:${process.env.NEXT_PUBLIC_PORT}/users/getPicture`,
              { userName1: element.player1, userName2: element.player2 },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
              }).then((res)=>{
                  let array:any = [...liveGame]
                  array.push({player1: element.player1, playerpic1:res.data.user1,player2: element.player2, playerpic2:res.data.user2})
                  changeLiveGame(array)
            })      
          });
        })
      },[])

    return (
        <>
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.child1}>
                        <button className={style.Btn}> Quick Match</button>
                        <button className={style.Btn}> Setting</button>
                    </div>
                    <div className={style.childSclor}>
                        {liveGame.map((data, index) =>(
                            <LiveListMatch key ={index} data={data}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watch