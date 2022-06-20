import { Injectable } from "@nestjs/common";
import e from "express";
import { Socket } from "socket.io";
import { GamesDto } from "src/dto-classes/game.dto";
import { LiveGameDto } from "src/dto-classes/liveGame.dto";
import { GamesService } from "src/games/game.service";
import { liveGameService } from "src/liveGame/liveGame.service";


var gameStat ={
	with:1000,
	height:(1000/2),
	rectWidth:1000/80,
	rectHeigth:1000/8,
	ballSize:1000/80,
	ballMovmentX:1000/520 
}

@Injectable()
export default class gamePlayService
{
    constructor(
    private gameServ : GamesService,
    private liveGameServ : liveGameService ,

    )
    {

    }

    init(player1:string,player2:string,playersStat:any,ballStat:any,watchers:any) {
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
            trajectY:true,
            oneTime:0
        })
        watchers.push({
            player1:player1,
            player2:player2,
            watchers:[]
        })
    }

    movingPaddles(playersStat:any, player:string, movement:any, sockets:any,liveGame:LiveGameDto,watchers:any){
        let playersPlaying = playersStat.find(element=> element?.player1 === player || element?.player2 === player)
        var player1 : Socket[] = [];
        var player2 : Socket[] = [];
        let watchers_ = watchers.find(element => element.player1 == player || element.player2 == player).watchers
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
        if (movement === "up" || movement === "down"){
            let players =  playersStat.find(element => element.player1 === liveGame[0].player1 || element.player2 === liveGame[0].player2)
            player1 = sockets.get(players.player1);
            player2 = sockets.get(players.player2);
            for(let ids of player1)
            {
                ids.emit("movements",{player:"player1" ,players})
            }
            for(let ids of player2)
            {
                ids.emit("movements",{player:"player1" ,players})
            }
            for (let index = 0; index <  watchers_.length; index++) {
                let player : Socket[] = []
                player = sockets.get(watchers_[index])
                for(let ids of player)
                {
                    ids.emit("movements",{player:"player1" ,players})
                }
            }
        }
    }

    movingBall(player:string,ballStat:any, playersStat:any,sockets:any,intervals:any,watchers:any){
        let stats_Ball =  ballStat.find(element => element.player1 === player || element.player2 === player)
        let stats_player = playersStat.find(element => element.player1 === player || element.player2 === player)
        let watchers_
        if(typeof watchers.find(element => element.player1 == player || element.player2 == player) != "undefined")
            watchers_ = watchers.find(element => element.player1 == player || element.player2 == player).watchers
        var player1 : Socket[] = [];
		var player2 : Socket[] = [];
        if (stats_Ball.oneTime != 1 && stats_Ball.ballX + gameStat.ballSize>=gameStat.with- gameStat.rectWidth + 5 && stats_Ball.ballX + gameStat.ballSize <= gameStat.with && stats_Ball.ballY + gameStat.ballSize > stats_player.player2Y && stats_Ball.ballY < stats_player.player2Y + gameStat.rectHeigth + gameStat.ballSize) 
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
            ballStat.find(element => element.player1 === player || element.player2 === player).oneTime = 1
        }
        else if (stats_Ball.oneTime != 2 && stats_Ball.ballX -gameStat.ballSize <= gameStat.rectWidth + 5 &&stats_Ball.ballX - gameStat.ballSize >= 0 && stats_Ball.ballY + gameStat.ballSize > stats_player.player1Y &&stats_Ball.ballY <stats_player.player1Y + gameStat.rectHeigth + gameStat.ballSize)
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
            ballStat.find(element => element.player1 === player || element.player2 === player).oneTime = 2
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
        player1 = sockets.get(ballStat.find(element => element.player1 === player || element.player2 === player).player1)
		player2 = sockets.get(ballStat.find(element => element.player1 === player || element.player2 === player).player2)
        if (playerStat.player1score >= 40000 || playerStat.player2score >= 40000){
            let player1_ = playerStat.player1score > playerStat.player2score ? "Winner" : "Loser"
            let player2_ = playerStat.player1score < playerStat.player2score ? "Winner" : "Loser"
            var game : GamesDto = new(GamesDto)
			game.winner_user = playerStat.player1score > playerStat.player2score ? playerStat.player1 :playerStat.player2
			game.loser_user = playerStat.player1score < playerStat.player2score ? playerStat.player1 :playerStat.player2
			game.Score = `${playerStat.player1score > playerStat.player2score ? playerStat.player1score : playerStat.player2score}-${playerStat.player1score < playerStat.player2score ? playerStat.player1score : playerStat.player2score}`
			game.played_at = new Date()
			this.gameServ.InsertGame(game)
            this.liveGameServ.deleteGame(player)
            for(let ids of player1)
            {
                ids.emit("gameOver",{
                    ballStats, 
                    playerStat,
                    status:player1_,
                    player:playerStat.player1
                })
            }
            for(let ids of player2)
            {
                ids.emit("gameOver",{
                    ballStats, 
                    playerStat,
                    status:player2_,
                    player:playerStat.player2
                })
            }
            for (let index = 0; index <  watchers_.length; index++) {
                let player : Socket[] = []
                player = sockets.get(watchers_[index])
                for(let ids of player)
                {
                    ids.emit("gameOver",{
                        ballStats, 
                        playerStat,
                        status:player1_,
                        player:playerStat.player1
                    })
                }
            }
            ballStat.splice(ballStat.indexOf(ballStat.find(element => element.player1 === player || element.player2 === player)),1)
            playersStat.splice(playersStat.indexOf(playersStat.find(element => element.player1 === player || element.player2 === player)),1)
            watchers.splice(watchers.indexOf(watchers.find(element => element.player1 === player || element.player2 === player)),1)
            clearInterval(intervals.find(element => element.player1 == player || element.player2 == player).id)
            intervals.splice(intervals.indexOf(intervals.find(element => element.player1 === player || element.player2 === player)),1)
        }
        else {
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
                    playerStat,
                })
            }
            if (typeof watchers_ != "undefined")
                for (let index = 0; index <  watchers_.length; index++) {
                    let player : Socket[] = []
                    player = sockets.get(watchers_[index])
                    for(let ids of player)
                    {
                        ids.emit("ballMovement",{
                            ballStats, 
                            playerStat,
                        })
                    }
                }
        }
    }

    checkWatchers(watchers:any, userName:string){
        let legal = "illegal"
        let i = 0
        if (Object.keys(watchers).length > 0){
            if (typeof watchers.find(element => element?.player1 === userName || element?.player2 === userName) != "undefined"){    
                watchers.forEach(element => {
                    if (element.watchers.indexOf(userName) != -1){
                        legal = "legal"
                        return 0
                    }
                    i++
                });
                if (legal == "legal")
                    watchers[i].watchers.splice(watchers[i].watchers.indexOf(userName),1)
                console.log(watchers)
            }else{
                if (watchers.indexOf(watchers.find(element => element?.player1 === userName || element?.player2 === userName)) != -1)
                    watchers.splice(watchers.indexOf(watchers.find(element => element?.player1 === userName || element?.player2 === userName)),1)
            }
        }

    }

    clearGames(intervals:any, ballStat:any,playersStat:any,userName:string){
        if (intervals.length > 0 && intervals.find(element => element?.player1 === userName || element?.player2 === userName).id != undefined){
            clearInterval(intervals.find(element => element?.player1 === userName || element?.player2 === userName).id)	
            intervals.splice(intervals.indexOf(intervals.find(element => element?.player1 === userName || element?.player2 === userName)),1)
        }
        if (ballStat.indexOf(ballStat.find(element => element?.player1 === userName || element?.player2 === userName)) != -1)
            ballStat.splice(ballStat.indexOf(ballStat.find(element => element?.player1 === userName || element?.player2 === userName)),1)
        if (playersStat.indexOf(playersStat.find(element => element?.player1 === userName || element?.player2 === userName)) != -1)
            playersStat.splice(playersStat.indexOf(playersStat.find(element => element?.player1 === userName || element?.player2 === userName)),1)
        console.log(intervals)
    }

    changeTraject(impact:number){

        if(impact < 0)
            impact *= -1
        return {y:impact / 20 ,x:4 - (impact / 20)}
    }
}