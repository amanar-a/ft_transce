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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatGateway = exports.moveData = void 0;
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const chatRoom_service_1 = require("../chatRoom/chatRoom.service");
const roomMessage_service_1 = require("../chatRoom/roomMessage.service");
const game_dto_1 = require("../dto-classes/game.dto");
const liveGame_dto_1 = require("../dto-classes/liveGame.dto");
const message_dtp_1 = require("../dto-classes/message.dtp");
const user_entity_1 = require("../entities/user.entity");
const game_service_1 = require("../games/game.service");
const liveGame_service_1 = require("../liveGame/liveGame.service");
const message_service_1 = require("../messages/message.service");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const gamePlay_service_1 = require("./gamePlay.service");
class moveData {
}
exports.moveData = moveData;
var playersStat = new Array;
var ballStat = new Array;
var intervals = new Array;
var sockets = new Map();
var matchMakingarray = new Array;
let chatGateway = class chatGateway {
    constructor(messageServ, userServ, usersRepository, gamePlaysServ, liveGameServ, roomMessageServ, chatRoomServ, jwtService, gameServ) {
        this.messageServ = messageServ;
        this.userServ = userServ;
        this.usersRepository = usersRepository;
        this.gamePlaysServ = gamePlaysServ;
        this.liveGameServ = liveGameServ;
        this.roomMessageServ = roomMessageServ;
        this.chatRoomServ = chatRoomServ;
        this.jwtService = jwtService;
        this.gameServ = gameServ;
        this.server = [];
    }
    async handleDisconnect(client) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            console.log("------ desconnection -----");
            if (sender_id.length > 0) {
                if (matchMakingarray.indexOf(sender_id[0].userName) != -1) {
                    matchMakingarray.splice(matchMakingarray.indexOf(sender_id[0].userName), 1);
                }
                let player2 = await this.liveGameServ.getGameByPlayer(sender_id[0].userName);
                if (typeof player2 != "undefined" && player2.length > 0) {
                    var game = new (game_dto_1.GamesDto);
                    game.winner_user = player2;
                    game.loser_user = sender_id[0].userName;
                    game.Score = `D.N.F-D.N.F`;
                    game.played_at = new Date();
                    this.gameServ.InsertGame(game);
                    this.liveGameServ.deleteGame(sender_id[0].userName);
                    var playerSocket = [];
                    playersStat = playersStat.filter(element => element.player1 != sender_id[0].userName && element.player2 != sender_id[0].userName);
                    if (intervals.length > 0 && typeof intervals.find(element => (element === null || element === void 0 ? void 0 : element.player1) === sender_id[0].userName || (element === null || element === void 0 ? void 0 : element.player2) === sender_id[0].userName).id != "undefined")
                        clearInterval(intervals.find(element => (element === null || element === void 0 ? void 0 : element.player1) === sender_id[0].userName || (element === null || element === void 0 ? void 0 : element.player2) === sender_id[0].userName).id);
                    intervals = intervals.filter(element => (element === null || element === void 0 ? void 0 : element.player1) != sender_id[0].userName && (element === null || element === void 0 ? void 0 : element.player2) != sender_id[0].userName);
                    playerSocket = sockets.get(player2);
                    console.log(intervals);
                    for (let ids of playerSocket) {
                        ids.emit("opponentLeft", { user: player2 });
                    }
                }
                let array = sockets.get(sender_id[0].userName);
                let i = 0;
                if (array != undefined) {
                    array.forEach(element => {
                        if (element.id == client.id)
                            array.splice(i, 1);
                        i++;
                    });
                }
                if (array == undefined || array.length == 0)
                    this.userServ.updateActive(false, sender_id[0].userName);
                if (array != undefined) {
                    for (let [key, value] of sockets) {
                        if (key == sender_id[0].userName) {
                            for (let node of value)
                                console.log(node.id);
                        }
                    }
                }
                console.log("----------------------");
            }
        }
    }
    async handleConnection(client, ...args) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            console.log("------ connection ...-----");
            if (Object.keys(sender_id).length !== 0) {
                console.log(sender_id[0].userName);
                if (sockets.get(sender_id[0].userName) != undefined) {
                    for (let [key, value] of sockets) {
                        if (key == sender_id[0].userName) {
                            value.push(client);
                            sockets.set(sender_id[0].userName, value);
                            break;
                        }
                    }
                }
                else {
                    var obj = [];
                    obj.push(client);
                    sockets.set(sender_id[0].userName, obj);
                }
                for (let [key, value] of sockets) {
                    if (key == sender_id[0].userName) {
                        for (let node of value)
                            console.log(node.id);
                    }
                }
                this.userServ.updateActive(true, sender_id[0].userName);
                console.log("-----------------------");
            }
        }
    }
    async handleMessage(client, text) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(sender_id).length !== 0) {
                var data = new message_dtp_1.messageDto();
                data.message = text[0];
                data.senderId = sender_id[0].userName;
                data.reciverId = text[1];
                data.time = new Date();
                await this.messageServ.createMessage(data);
                var conversation = await this.messageServ.getConversation(data.senderId, data.reciverId);
                var senderSock = [];
                var reciverSock = [];
                senderSock = sockets.get(data.senderId);
                for (let ids of senderSock) {
                    ids.emit("message", conversation);
                }
                reciverSock = sockets.get(data.reciverId);
                for (let ids of reciverSock) {
                    ids.emit("message", conversation);
                }
            }
        }
    }
    async matchmaking(client, test) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let user_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            var player = [];
            var player2 = [];
            console.log("----------matchMaking-------------");
            if (matchMakingarray.indexOf(user_id[0].userName) == -1) {
                matchMakingarray.push(user_id[0].userName);
            }
            if (matchMakingarray.length > 1) {
                let game = new (liveGame_dto_1.LiveGameDto);
                player = sockets.get(user_id[0].userName);
                player2 = sockets.get(matchMakingarray[0]);
                game.player1 = matchMakingarray[0];
                game.player2 = matchMakingarray[1];
                game.time = new Date();
                await this.liveGameServ.saveGame(game);
                this.gamePlaysServ.init(game.player1, game.player2, playersStat, ballStat);
                console.log("player :", user_id[0].userName);
                console.log("player 2:", matchMakingarray[0]);
                for (let ids of player) {
                    ids.emit("matchmaking", [matchMakingarray[0], matchMakingarray[1]]);
                }
                for (let ids of player2) {
                    ids.emit("matchmaking", [matchMakingarray[0], matchMakingarray[1]]);
                }
                console.log("--------------------------");
                matchMakingarray.splice(0, 2);
            }
            else {
                for (let ids of player) {
                    ids.emit("matchmaking", "still waiting");
                }
                console.log("--------------------------");
            }
        }
    }
    async setInterval(client, test) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            var player = [];
            var player2 = [];
            if (userInfo.length > 0) {
                let game = await this.liveGameServ.getGame(userInfo[0].userName);
                player = sockets.get(game[0].player1);
                player2 = sockets.get(game[0].player2);
                if (userInfo[0].userName == game[0].player1) {
                    const interval = setInterval(() => this.gamePlaysServ.movingBall(userInfo[0].userName, ballStat, playersStat, player, player2, intervals), 10);
                    intervals.push({ id: interval, player1: game[0].player1, player2: game[0].player2 });
                }
            }
        }
    }
    async playing(client, body) {
        console.log("--------playing-------------");
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let liveGame = await this.liveGameServ.getGame(userInfo[0].userName);
                var player1 = [];
                var player2 = [];
                player1 = sockets.get(liveGame[0].player1);
                player2 = sockets.get(liveGame[0].player2);
                this.gamePlaysServ.movingPaddles(playersStat, userInfo[0].userName, body, player1, player2, liveGame);
            }
        }
    }
    async handleChannels(client, text) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let test = await this.usersRepository.find({
                    relations: ['chatRooms'],
                    where: { userName: userInfo.userName }
                });
                let rooms = test[0].chatRooms;
                if (rooms.length !== 0) {
                    for (let room of rooms) {
                        client.join(room.id);
                    }
                }
            }
        }
    }
    async handleRoomMessage(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let room = await this.chatRoomServ.getRoomById(data.id);
            }
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], chatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('message'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('matchmaking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "matchmaking", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('setInterval'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "setInterval", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('playing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, moveData]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "playing", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('startChannels'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "handleChannels", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('roomMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "handleRoomMessage", null);
chatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [message_service_1.messageService, user_service_1.UserService,
        typeorm_2.Repository,
        gamePlay_service_1.gamePlayService,
        liveGame_service_1.liveGameService,
        roomMessage_service_1.roomMessageService,
        chatRoom_service_1.chatRoomService,
        jwt_1.JwtService,
        game_service_1.GamesService])
], chatGateway);
exports.chatGateway = chatGateway;
//# sourceMappingURL=chat.gateway.js.map