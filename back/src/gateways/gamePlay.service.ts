import { Injectable } from "@nestjs/common";
import { Socket } from "socket.io";
import { LiveGameDto } from "src/dto-classes/liveGame.dto";


var gameStat ={
	with:1000,
	height:(1000/2),
	rectWidth:1000/80,
	rectHeigth:1000/8,
	ballSize:1000/80,
	ballMovmentX:1000/520
}
let oneTime = 0
@Injectable()
export class gamePlayService
{
    constructor(

    )
    {

    }

    init(player1:string,player2:string,playersStat:any,ballStat:any) {
        playersStat.push({
            player1:player1, 
            player1Y:(gameStat.height / 2) - (gameStat.rectHeigth / 2),
            player1score:0,
            player2:player2,
            player2Y:(gameStat.height/ 2)  - (gameStat.rectHeigth / 2),
            player2score:0
        })
        ballStat.push({
            player1:player1, 
            player2:player2, 
            ballX: gameStat.with / 2, 
            ballY:gameStat.height / 2, 
            ballMovmentX:2,
            ballMovmentY:2,
            trajectX:false,
            trajectY:true
        })
    }

    movingPaddles(playersStat:any, player:string, movement:any, player1:Socket[], player2:Socket[],liveGame:LiveGameDto){
        let playersPlaying = playersStat.find(element=> element?.player1 === player || element?.player2 === player)
        if (movement === "up"){
            if (playersPlaying.player1 === player){
                if (playersPlaying.player1Y < 6 && playersPlaying.player1Y > 0)
                    playersStat.find(element => element.player1 === player).player1Y = 5
                else if (playersPlaying.player1Y >= 6)
                    playersStat.find(element => element.player1 === player).player1Y = playersPlaying.player1Y - 6
            }else if (playersPlaying.player2 === player){
                if (playersPlaying.player2Y < 6 && playersPlaying.player2Y > 0) 
                    playersStat.find(element => element.player2 === player).player2Y = 5
                else if (playersPlaying.player2Y >= 6)
                    playersStat.find(element => element.player2 === player).player2Y = playersPlaying.player2Y - 6
            }
        }else if (movement === "down"){
            if (playersPlaying.player1 === player){
                if (playersPlaying.player1Y > gameStat.height - gameStat.rectHeigth - 6 && playersPlaying.player1Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player1 === player).player1Y = gameStat.height - gameStat.rectHeigth - 5
                else if (playersPlaying.player1Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player1 === player).player1Y = playersPlaying.player1Y + 6
            }else if (playersPlaying.player2 === player){
                if (playersPlaying.player2Y > gameStat.height - gameStat.rectHeigth - 6 && playersPlaying.player2Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player2 === player).player2Y = gameStat.height - gameStat.rectHeigth - 5
                else if (playersPlaying.player2Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player2 === player).player2Y = playersPlaying.player2Y + 6
            }
        }
        let players =  playersStat.find(element => element.player1 === liveGame[0].player1 || element.player2 === liveGame[0].player2)
		if(liveGame[0].player1 == player)
		{
			for(let ids of player1)
			{
				ids.emit("movements",{player:"player1" ,players})
			}
			for(let ids of player2)
			{
				ids.emit("movements",{player:"player1" ,players})
			}
		}else{
			for(let ids of player1)
			{
				ids.emit("movements",{player:"player2" ,players})
			}
			for(let ids of player2)
			{
				ids.emit("movements",{player:"player2" ,players})
			}
		}
    }

    movingBall(player:string,ballStat:any, playersStat:any,player1:Socket[],player2:Socket[]){
        let stats_Ball =  ballStat.find(element => element.player1 === player || element.player2 === player)
        let stats_player = playersStat.find(element => element.player1 === player || element.player2 === player)
        if (oneTime != 1 && stats_Ball.ballX + gameStat.ballSize>=gameStat.with- gameStat.rectWidth + 5 && stats_Ball.ballX + gameStat.ballSize <= gameStat.with && stats_Ball.ballY + gameStat.ballSize > stats_player.player2Y && stats_Ball.ballY < stats_player.player2Y + gameStat.rectHeigth + gameStat.ballSize) 
        {
            let impact = stats_Ball.ballY - (stats_player.player2Y + gameStat.rectHeigth / 2);
            if(stats_Ball.trajectY === true && impact < 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY
            else if(stats_Ball.trajectY === false && impact > 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY  
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectX = false
            let xy = this.changeTraject(impact)
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentX = xy.x
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentY = xy.y
            oneTime = 1
        }
        else if (oneTime != 2 && stats_Ball.ballX -gameStat.ballSize <= gameStat.rectWidth + 5 &&stats_Ball.ballX - gameStat.ballSize >= 0 && stats_Ball.ballY + gameStat.ballSize > stats_player.player1Y &&stats_Ball.ballY <stats_player.player1Y + gameStat.rectHeigth + gameStat.ballSize)
        {
            let impact = stats_Ball.ballY - (stats_player.player1Y + gameStat.rectHeigth / 2);
            if(stats_Ball.trajectY === true && impact < 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY
            else if (stats_Ball.trajectY === false && impact > 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectX = true
            let xy = this.changeTraject(impact)
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentX = xy.x
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentY = xy.y
            oneTime = 2
        }
        if (stats_Ball.ballY + gameStat.ballSize >= gameStat.height)
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectY=false
        if (stats_Ball.ballY - gameStat.ballSize <= 0)
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectY=true
        if (stats_Ball.ballX <= 0) {
            playersStat.find(element => element.player1 === player || element.player2 === player).player2score = stats_player.player2score + 1
            ballStat.find(element => element.player1 === player || element.player2 === player).ballX = gameStat.with / 2
            ballStat.find(element => element.player1 === player || element.player2 === player).ballY = gameStat.height / 2
        }
        else if (stats_Ball.ballX >= gameStat.with){
            playersStat.find(element => element.player1 === player || element.player2 === player).player1score = stats_player.player1score + 1
            ballStat.find(element => element.player1 === player || element.player2 === player).ballX = gameStat.with / 2
            ballStat.find(element => element.player1 === player || element.player2 === player).ballY = gameStat.height / 2
        }else{
            let newStats_ball = ballStat.find(element => element.player1 === player || element.player2 === player)
            ballStat.find(element => element.player1 === player || element.player2 === player).ballX = newStats_ball.trajectX ? newStats_ball.ballX + newStats_ball.ballMovmentX : newStats_ball.ballX - newStats_ball.ballMovmentX
            ballStat.find(element => element.player1 === player || element.player2 === player).ballY = newStats_ball.trajectY ? newStats_ball.ballY + newStats_ball.ballMovmentY : newStats_ball.ballY - newStats_ball.ballMovmentY
        }

        let ballStats = ballStat.find(element => element.player1 === player || element.player2 === player)
        let playerStat = playersStat.find(element => element.player1 === player || element.player2 === player)
        for(let ids of player1)
        {
            ids.emit("ballMovement",{
                ballStats, 
                playerStat
            })
        }
        for(let ids of player2)
        {
            ids.emit("ballMovement",{
                ballStats, 
                playerStat
            })
        }
    }

    changeTraject(impact:number){

        if(impact < 0)
            impact *= -1
        return {y:impact / 20 ,x:4 - (impact / 20)}
    }
}