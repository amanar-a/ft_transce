"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const game_dto_1 = require("../dto-classes/game.dto");
const game_service_1 = require("../games/game.service");
const liveGame_service_1 = require("../liveGame/liveGame.service");
var gameStat = {
    with: 1000,
    height: (1000 / 2),
    rectWidth: 1000 / 80,
    rectHeigth: 1000 / 8,
    ballSize: 1000 / 80,
    ballMovmentX: 1000 / 520
};
let gamePlayService = class gamePlayService {
    constructor(gameServ, liveGameServ) {
        this.gameServ = gameServ;
        this.liveGameServ = liveGameServ;
    }
    init(player1, player2, playersStat, ballStat, watchers, mods) {
        let random = Math.floor(Math.random() * 2);
        playersStat.push({
            player1: player1,
            player1Y: (gameStat.height / 2) - (gameStat.rectHeigth / 2),
            player1score: 0,
            player2: player2,
            player2Y: (gameStat.height / 2) - (gameStat.rectHeigth / 2),
            player2score: 0
        });
        ballStat.push({
            player1: player1,
            player2: player2,
            ballX: gameStat.with / 2,
            ballY: gameStat.height / 2,
            ballMovmentX: 2,
            ballMovmentY: 2,
            trajectX: false,
            trajectY: true,
            Settings: mods[random],
            oneTime: 0
        });
        watchers.push({
            player1: player1,
            player2: player2,
            watchers: []
        });
    }
    movingPaddles(playersStat, player, movement, sockets, liveGame, watchers) {
        let playersPlaying = playersStat.find(element => (element === null || element === void 0 ? void 0 : element.player1) === player || (element === null || element === void 0 ? void 0 : element.player2) === player);
        var player1 = [];
        var player2 = [];
        let watchers_ = watchers.find(element => element.player1 == player || element.player2 == player).watchers;
        if (movement === "up") {
            if (playersPlaying.player1 === player) {
                if (playersPlaying.player1Y < 6 && playersPlaying.player1Y > 0)
                    playersStat.find(element => element.player1 === player).player1Y = 5;
                else if (playersPlaying.player1Y >= 6)
                    playersStat.find(element => element.player1 === player).player1Y = playersPlaying.player1Y - 10;
            }
            else if (playersPlaying.player2 === player) {
                if (playersPlaying.player2Y < 6 && playersPlaying.player2Y > 0)
                    playersStat.find(element => element.player2 === player).player2Y = 5;
                else if (playersPlaying.player2Y >= 6)
                    playersStat.find(element => element.player2 === player).player2Y = playersPlaying.player2Y - 10;
            }
        }
        else if (movement === "down") {
            if (playersPlaying.player1 === player) {
                if (playersPlaying.player1Y > gameStat.height - gameStat.rectHeigth - 6 && playersPlaying.player1Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player1 === player).player1Y = gameStat.height - gameStat.rectHeigth - 5;
                else if (playersPlaying.player1Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player1 === player).player1Y = playersPlaying.player1Y + 10;
            }
            else if (playersPlaying.player2 === player) {
                if (playersPlaying.player2Y > gameStat.height - gameStat.rectHeigth - 6 && playersPlaying.player2Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player2 === player).player2Y = gameStat.height - gameStat.rectHeigth - 5;
                else if (playersPlaying.player2Y < gameStat.height - gameStat.rectHeigth)
                    playersStat.find(element => element.player2 === player).player2Y = playersPlaying.player2Y + 10;
            }
        }
        if (movement === "up" || movement === "down") {
            let players = playersStat.find(element => element.player1 === liveGame[0].player1 || element.player2 === liveGame[0].player2);
            player1 = sockets.get(players.player1);
            player2 = sockets.get(players.player2);
            for (let ids of player1) {
                ids.emit("movements", { player: "player1", players });
            }
            for (let ids of player2) {
                ids.emit("movements", { player: "player1", players });
            }
            for (let index = 0; index < watchers_.length; index++) {
                let player = [];
                player = sockets.get(watchers_[index]);
                for (let ids of player) {
                    ids.emit("movements", { player: "player1", players });
                }
            }
        }
    }
    movingBall(player, ballStat, playersStat, sockets, intervals, watchers) {
        let stats_Ball = ballStat.find(element => element.player1 === player || element.player2 === player);
        let stats_player = playersStat.find(element => element.player1 === player || element.player2 === player);
        let watchers_ = watchers.find(element => element.player1 == player || element.player2 == player).watchers;
        var player1 = [];
        var player2 = [];
        if (stats_Ball.oneTime != 1 && stats_Ball.ballX + stats_Ball.Settings.ballSize >= gameStat.with - gameStat.rectWidth - 5 && stats_Ball.ballX + stats_Ball.Settings.ballSize <= gameStat.with && stats_Ball.ballY + stats_Ball.Settings.ballSize > stats_player.player2Y && stats_Ball.ballY < stats_player.player2Y + gameStat.rectHeigth + stats_Ball.Settings.ballSize) {
            let impact = stats_Ball.ballY - (stats_player.player2Y + gameStat.rectHeigth / 2);
            if (stats_Ball.trajectY === true && impact < 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY;
            else if (stats_Ball.trajectY === false && impact > 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY;
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectX = false;
            let xy = this.changeTraject(impact);
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentX = xy.x;
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentY = xy.y;
            ballStat.find(element => element.player1 === player || element.player2 === player).oneTime = 1;
        }
        else if (stats_Ball.oneTime != 2 && stats_Ball.ballX - stats_Ball.Settings.ballSize <= gameStat.rectWidth + 5 && stats_Ball.ballX - stats_Ball.Settings.ballSize >= 0 && stats_Ball.ballY + stats_Ball.Settings.ballSize > stats_player.player1Y && stats_Ball.ballY < stats_player.player1Y + gameStat.rectHeigth + stats_Ball.Settings.ballSize) {
            let impact = stats_Ball.ballY - (stats_player.player1Y + gameStat.rectHeigth / 2);
            if (stats_Ball.trajectY === true && impact < 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY;
            else if (stats_Ball.trajectY === false && impact > 0)
                ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = !stats_Ball.trajectY;
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectX = true;
            let xy = this.changeTraject(impact);
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentX = xy.x;
            ballStat.find(element => element.player1 === player || element.player2 === player).ballMovmentY = xy.y;
            ballStat.find(element => element.player1 === player || element.player2 === player).oneTime = 2;
        }
        if (stats_Ball.ballY + stats_Ball.Settings.ballSize >= gameStat.height)
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = false;
        if (stats_Ball.ballY - stats_Ball.Settings.ballSize <= 0)
            ballStat.find(element => element.player1 === player || element.player2 === player).trajectY = true;
        if (stats_Ball.ballX <= 0) {
            playersStat.find(element => element.player1 === player || element.player2 === player).player2score = stats_player.player2score + 1;
            ballStat.find(element => element.player1 === player || element.player2 === player).ballX = gameStat.with / 2;
            ballStat.find(element => element.player1 === player || element.player2 === player).ballY = gameStat.height / 2;
        }
        else if (stats_Ball.ballX >= gameStat.with) {
            playersStat.find(element => element.player1 === player || element.player2 === player).player1score = stats_player.player1score + 1;
            ballStat.find(element => element.player1 === player || element.player2 === player).ballX = gameStat.with / 2;
            ballStat.find(element => element.player1 === player || element.player2 === player).ballY = gameStat.height / 2;
        }
        else {
            let newStats_ball = ballStat.find(element => element.player1 === player || element.player2 === player);
            ballStat.find(element => element.player1 === player || element.player2 === player).ballX = newStats_ball.trajectX ? newStats_ball.ballX + newStats_ball.ballMovmentX : newStats_ball.ballX - newStats_ball.ballMovmentX;
            ballStat.find(element => element.player1 === player || element.player2 === player).ballY = newStats_ball.trajectY ? newStats_ball.ballY + newStats_ball.ballMovmentY : newStats_ball.ballY - newStats_ball.ballMovmentY;
        }
        let ballStats = ballStat.find(element => element.player1 === player || element.player2 === player);
        let playerStat = playersStat.find(element => element.player1 === player || element.player2 === player);
        player1 = sockets.get(ballStat.find(element => element.player1 === player || element.player2 === player).player1);
        player2 = sockets.get(ballStat.find(element => element.player1 === player || element.player2 === player).player2);
        if (playerStat.player1score >= 10 || playerStat.player2score >= 10) {
            let player1_ = playerStat.player1score > playerStat.player2score ? "Winner" : "Loser";
            let player2_ = playerStat.player1score < playerStat.player2score ? "Winner" : "Loser";
            var game = new (game_dto_1.GamesDto);
            game.winner_user = playerStat.player1score > playerStat.player2score ? playerStat.player1 : playerStat.player2;
            game.loser_user = playerStat.player1score < playerStat.player2score ? playerStat.player1 : playerStat.player2;
            game.Score = `${playerStat.player1score > playerStat.player2score ? playerStat.player1score : playerStat.player2score}-${playerStat.player1score < playerStat.player2score ? playerStat.player1score : playerStat.player2score}`;
            game.played_at = new Date();
            this.gameServ.InsertGame(game);
            this.liveGameServ.deleteGame(player);
            for (let ids of player1) {
                ids.emit("gameOver", {
                    ballStats,
                    playerStat,
                    status: player1_,
                    player: playerStat.player1
                });
            }
            for (let ids of player2) {
                ids.emit("gameOver", {
                    ballStats,
                    playerStat,
                    status: player2_,
                    player: playerStat.player2
                });
            }
            for (let index = 0; index < watchers_.length; index++) {
                let player = [];
                player = sockets.get(watchers_[index]);
                for (let ids of player) {
                    console.log(watchers_);
                    ids.emit("gameOver", {
                        ballStats,
                        playerStat,
                        status: "Winner",
                        player: playerStat.player1score > playerStat.player2score ? playerStat.player1 : playerStat.player2
                    });
                }
            }
            ballStat.splice(ballStat.indexOf(ballStat.find(element => element.player1 === player || element.player2 === player)), 1);
            playersStat.splice(playersStat.indexOf(playersStat.find(element => element.player1 === player || element.player2 === player)), 1);
            watchers.splice(watchers.indexOf(watchers.find(element => element.player1 === player || element.player2 === player)), 1);
            clearInterval(intervals.find(element => element.player1 == player || element.player2 == player).id);
            intervals.splice(intervals.indexOf(intervals.find(element => element.player1 === player || element.player2 === player)), 1);
        }
        else {
            for (let ids of player1) {
                ids.emit("ballMovement", {
                    ballStats,
                    playerStat
                });
            }
            for (let ids of player2) {
                ids.emit("ballMovement", {
                    ballStats,
                    playerStat,
                });
            }
            if (typeof watchers_ != "undefined")
                for (let index = 0; index < watchers_.length; index++) {
                    let player = [];
                    player = sockets.get(watchers_[index]);
                    for (let ids of player) {
                        ids.emit("ballMovement", {
                            ballStats,
                            playerStat,
                        });
                    }
                }
        }
    }
    checkWatchers(watchers, userName) {
        let legal = "illegal";
        let i = 0;
        if (Object.keys(watchers).length > 0) {
            console.log(typeof watchers.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName));
            if (typeof watchers.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName) == "undefined") {
                watchers.forEach(element => {
                    if (element.watchers.indexOf(userName) != -1) {
                        legal = "legal";
                        return 0;
                    }
                    i++;
                });
                if (legal == "legal")
                    watchers[i].watchers.splice(watchers[i].watchers.indexOf(userName), 1);
            }
            else {
                if (watchers.indexOf(watchers.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName)) != -1)
                    watchers.splice(watchers.indexOf(watchers.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName)), 1);
            }
        }
    }
    clearGames(intervals, ballStat, playersStat, userName, mods) {
        if (intervals.length > 0 && intervals.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName).id != undefined) {
            clearInterval(intervals.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName).id);
            intervals.splice(intervals.indexOf(intervals.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName)), 1);
        }
        if (ballStat.indexOf(ballStat.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName)) != -1)
            ballStat.splice(ballStat.indexOf(ballStat.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName)), 1);
        if (playersStat.indexOf(playersStat.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName)) != -1)
            playersStat.splice(playersStat.indexOf(playersStat.find(element => (element === null || element === void 0 ? void 0 : element.player1) === userName || (element === null || element === void 0 ? void 0 : element.player2) === userName)), 1);
    }
    changeTraject(impact) {
        if (impact < 0)
            impact *= -1;
        return { y: impact / 30, x: 4 - (impact / 30) };
    }
};
gamePlayService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [game_service_1.GamesService,
        liveGame_service_1.liveGameService])
], gamePlayService);
exports.default = gamePlayService;
//# sourceMappingURL=gamePlay.service.js.map