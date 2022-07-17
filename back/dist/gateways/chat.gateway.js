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
const roomsBannedUser_service_1 = require("../chatRoom/roomsBannedUser.service");
const game_dto_1 = require("../dto-classes/game.dto");
const liveGame_dto_1 = require("../dto-classes/liveGame.dto");
const message_dtp_1 = require("../dto-classes/message.dtp");
const user_entity_1 = require("../entities/user.entity");
const game_service_1 = require("../games/game.service");
const liveGame_service_1 = require("../liveGame/liveGame.service");
const message_service_1 = require("../messages/message.service");
const notification_service_1 = require("../notification/notification.service");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const gamePlay_service_1 = require("./gamePlay.service");
class moveData {
}
exports.moveData = moveData;
var playersStat = new Array;
var ballStat = new Array;
var intervals = new Array;
var watchers = new Array;
var Invits = new Array;
var mods = new Array;
var opponentLeft = async (this_, sender_id) => {
    if (matchMakingarray.indexOf(sender_id[0].userName) != -1)
        matchMakingarray.splice(matchMakingarray.indexOf(sender_id[0].userName), 1);
    if (mods.indexOf(mods.find(element => (element === null || element === void 0 ? void 0 : element.userName) === sender_id[0].userName)) != -1)
        mods.splice(mods.indexOf(mods.find(element => (element === null || element === void 0 ? void 0 : element.userName) === sender_id[0].userName)), 1);
    let player2 = await this_.liveGameServ.getGameByPlayer(sender_id[0].userName);
    if (typeof player2 != "undefined" && Object.keys(player2).length > 0) {
        var game = new (game_dto_1.GamesDto);
        game.winner_user = player2;
        game.loser_user = sender_id[0].userName;
        game.Score = `D.N.F-D.N.F`;
        game.played_at = new Date();
        this_.gameServ.InsertGame(game);
        this_.liveGameServ.deleteGame(sender_id[0].userName);
        var playerSocket = [];
        playerSocket = sockets.get(player2);
        if (typeof playersStat.find(element => element.player1 == sender_id[0].userName || element.player2 == sender_id[0].userName) != "undefined") {
            for (let ids of playerSocket) {
                ids.emit("opponentLeft", { user: player2 });
            }
            let watchers_ = watchers.find(element => element.player1 == sender_id[0].userName || element.player2 == sender_id[0].userName).watchers;
            for (let index = 0; index < watchers_.length; index++) {
                let player = [];
                player = sockets.get(watchers_[index]);
                for (let ids of player) {
                    ids.emit("opponentLeft", { user: player2 });
                }
            }
            this_.gamePlaysServ.clearGames(intervals, ballStat, playersStat, sender_id[0].userName, mods);
        }
        this_.gamePlaysServ.checkWatchers(watchers, sender_id[0].userName);
    }
    else
        this_.gamePlaysServ.checkWatchers(watchers, sender_id[0].userName);
};
var sockets = new Map();
var matchMakingarray = new Array;
let chatGateway = class chatGateway {
    constructor(messageServ, userServ, usersRepository, liveGameServ, gamePlaysServ, roomMessageServ, chatRoomServ, jwtService, gameServ, roomBannedUserServ, notifServ) {
        this.messageServ = messageServ;
        this.userServ = userServ;
        this.usersRepository = usersRepository;
        this.liveGameServ = liveGameServ;
        this.gamePlaysServ = gamePlaysServ;
        this.roomMessageServ = roomMessageServ;
        this.chatRoomServ = chatRoomServ;
        this.jwtService = jwtService;
        this.gameServ = gameServ;
        this.roomBannedUserServ = roomBannedUserServ;
        this.notifServ = notifServ;
    }
    async handleDisconnect(client) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = await this.jwtService.decode(auth_token);
            let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(sender_id).length !== 0) {
                opponentLeft(this, sender_id);
                let array = sockets.get(sender_id[0].userName);
                let i = 0;
                let userRooms = await this.usersRepository.find({
                    relations: ['chatRooms'],
                    where: { userName: sender_id[0].userName }
                });
                let rooms = userRooms[0].chatRooms;
                if (rooms.length !== 0) {
                    for (let room of rooms) {
                        client.join(room.id.toString());
                    }
                }
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
            }
        }
    }
    async handleConnection(client, ...args) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let sender_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(sender_id).length !== 0) {
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
            }
        }
    }
    async handleMessage(client, text) {
        let auth_token = await client.handshake.auth.Authorization;
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
                if (senderSock !== null && senderSock !== undefined) {
                    for (let ids of senderSock) {
                        ids.emit("message", conversation);
                    }
                }
                reciverSock = sockets.get(data.reciverId);
                if (reciverSock !== null && reciverSock !== undefined) {
                    for (let ids of reciverSock) {
                        ids.emit("message", conversation);
                    }
                }
            }
        }
    }
    async matchmaking(client, body) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let legal = "legal";
            let i = 0;
            let user_id = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            var player = [];
            var player2 = [];
            watchers.forEach(element => {
                if (element.watchers.indexOf(user_id[0].userName) != -1) {
                    legal = "illegal";
                    return 0;
                }
                i++;
            });
            if (legal == "legal") {
                if (typeof playersStat.find(element => element.player1 == user_id[0].userName || element.player2 == user_id[0].userName) == "undefined") {
                    if (matchMakingarray.indexOf(user_id[0].userName) == -1 && Invits.indexOf(user_id[0].userName) == -1) {
                        matchMakingarray.push(user_id[0].userName);
                        let speed = isNaN(body.speed) ? 5 : parseInt(body.speed);
                        let ballSize = isNaN(body.ballSize) ? 12.5 : 1000 / (1000 / parseInt(body.ballSize));
                        if (body.speed == null || speed > 10 || speed < 1)
                            speed = 5;
                        if (body.ballSize == null || ballSize < 4 || ballSize > 40)
                            ballSize = 12.5;
                        mods.push({ userName: user_id[0].userName, speed: speed, ballSize: ballSize });
                    }
                    if (matchMakingarray.length > 1 || Invits.length > 1) {
                        let game = new (liveGame_dto_1.LiveGameDto);
                        if (matchMakingarray.indexOf(user_id[0].userName) != -1) {
                            player = sockets.get(user_id[0].userName);
                            player2 = sockets.get(matchMakingarray[0]);
                            game.player1 = matchMakingarray[0];
                            game.player2 = matchMakingarray[1];
                            game.time = new Date();
                            matchMakingarray.splice(0, 2);
                        }
                        else {
                            player = sockets.get(Invits[0]);
                            player2 = sockets.get(Invits[1]);
                            game.player1 = Invits[0];
                            game.player2 = Invits[1];
                            game.time = new Date();
                            Invits.splice(0, 2);
                        }
                        await this.liveGameServ.saveGame(game);
                        this.gamePlaysServ.init(game.player1, game.player2, playersStat, ballStat, watchers, mods);
                        for (let ids of player) {
                            ids.emit("matchmaking", [game.player1, game.player2, "Found"]);
                        }
                        for (let ids of player2) {
                            ids.emit("matchmaking", [game.player1, game.player2, "Found"]);
                        }
                        mods.splice(0, 2);
                    }
                    else {
                        for (let ids of player) {
                            ids.emit("matchmaking", "still waiting");
                        }
                    }
                }
                else {
                    let players = playersStat.find(element => element.player1 == user_id[0].userName || element.player2 == user_id[0].userName);
                    player = sockets.get(user_id[0].userName);
                    for (let ids of player) {
                        ids.emit("matchmaking", [players.player1, players.player2, "playing"]);
                    }
                }
            }
            else {
                player = sockets.get(user_id[0].userName);
                for (let ids of player) {
                    ids.emit("matchmaking", [watchers[i].player1, watchers[i].player2, "Watcher"]);
                }
            }
        }
    }
    async setInterval(client, test) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length > 0) {
                let game = await this.liveGameServ.getGame(userInfo[0].userName);
                if (Object.keys(game).length !== 0) {
                    if (typeof intervals.find(element => element.player1 == userInfo[0].userName || element.player2 == userInfo[0].userName) == "undefined") {
                        let speed = ballStat.find(element => element.player1 == userInfo[0].userName || element.player2 == userInfo[0].userName).Settings.speed;
                        const interval = setInterval(() => this.gamePlaysServ.movingBall(userInfo[0].userName, ballStat, playersStat, sockets, intervals, watchers), speed + 10);
                        intervals.push({ id: interval, player1: game[0].player1, player2: game[0].player2 });
                    }
                }
            }
        }
    }
    async addWatcher(client, body) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            var player = [];
            let lega = "";
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length > 0) {
                player = sockets.get(userInfo[0].userName);
                if (watchers.find(element => element.player1 == body || element.player2 == body).watchers.indexOf(userInfo[0].userName) == -1) {
                    if (matchMakingarray.indexOf(userInfo[0].userName))
                        matchMakingarray.splice(matchMakingarray.indexOf(userInfo[0].userName), 1);
                    watchers.find(element => element.player1 == body || element.player2 == body).watchers.push(userInfo[0].userName);
                    lega = "added";
                }
                else {
                    lega = "notAdded";
                }
                for (let ids of player) {
                    ids.emit("addWatcher", lega);
                }
            }
        }
    }
    async acceptInvite(client, body) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            var player = [];
            var player2 = [];
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length > 0) {
                player = sockets.get(userInfo[0].userName);
                player2 = sockets.get(body);
                if (player2 !== undefined) {
                    if (typeof playersStat.find(element => element.player1 == userInfo[0].userName || element.player2 == userInfo[0].userName) == "undefined" &&
                        typeof playersStat.find(element => element.player1 == body || element.player2 == body) == "undefined") {
                        let not = await this.notifServ.getNotificationBySR(body, userInfo[0].userName);
                        if (not.length > 0) {
                            Invits.push(userInfo[0].userName);
                            Invits.push(body);
                            mods.push({ userName: userInfo[0].userName, speed: 4, ballSize: 12.5 });
                            mods.push({ userName: body, speed: 4, ballSize: 12.5 });
                            for (let ids of player) {
                                ids.emit("accepted", "Accepted");
                            }
                            for (let ids of player2) {
                                ids.emit("accepted", "Accepted");
                            }
                            this.notifServ.deleteNotification(body, userInfo[0].userName);
                        }
                    }
                    else {
                        for (let ids of player) {
                            ids.emit("accepted", "Playing");
                        }
                    }
                }
                else {
                    for (let ids of player) {
                        ids.emit("accepted", "Disconected");
                    }
                }
            }
        }
    }
    async declineInvite(client, body) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            var player2 = [];
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length > 0) {
                let not = await this.notifServ.getNotificationBySR(body, userInfo[0].userName);
                if (not.length > 0) {
                    player2 = sockets.get(body);
                    this.notifServ.deleteNotification(body, userInfo[0].userName);
                    for (let ids of player2) {
                        ids.emit("declined", userInfo[0].userName);
                    }
                }
            }
        }
    }
    async leaving(client, test) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length != 0) {
                opponentLeft(this, userInfo);
            }
        }
    }
    async playing(client, body) {
        let auth_token = await client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let liveGame = await this.liveGameServ.getGame(userInfo[0].userName);
                if (Object.keys(liveGame).length !== 0 && (userInfo[0].userName == liveGame[0].player1 || userInfo[0].userName == liveGame[0].player2)) {
                    this.gamePlaysServ.movingPaddles(playersStat, userInfo[0].userName, body, sockets, liveGame, watchers);
                }
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
                    where: { userName: userInfo[0].userName }
                });
                let rooms = test[0].chatRooms;
                if (rooms.length !== 0) {
                    for (let room of rooms) {
                        client.join(room.id.toString());
                    }
                }
            }
        }
    }
    async creatChannel(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let room = await this.chatRoomServ.createRoom(userInfo[0].userName, data);
                let sock = [];
                let users = data.users;
                sock = sockets.get(userInfo[0].userName);
                for (let so of sock) {
                    so.join(`${room.id}`);
                }
                if (users.length !== 0) {
                    users.map((e) => {
                        sock = sockets.get(e.usersName);
                        for (let so of sock) {
                            so.join(room.id);
                        }
                    });
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
                await this.roomMessageServ.creatRoomMessage(userInfo[0].userName, data);
                let messages = await this.roomMessageServ.getRoomMessages(data.roomId);
                this.server.to(data.roomId).emit("messageRoom", messages);
            }
        }
    }
    async addUserToChannel(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let sock;
                this.chatRoomServ.addUsersToChannel(data.roomId, data.users);
                if (data.users.length !== 0) {
                    data.users.map((e) => {
                        sock = sockets.get(e.usersName);
                        if (sock) {
                            for (let so of sock) {
                                so.join(`${data.room.id}`);
                            }
                        }
                    });
                }
            }
        }
    }
    async handleNotification(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let recvSockts = sockets.get(data.reciverName);
                this.notifServ.saveNotification(data, userInfo[0].userName);
                let user = await this.usersRepository.findOneBy({ userName: userInfo[0].userName });
                for (let sock of recvSockts) {
                    sock.emit("notification", { user: user, type: data.type });
                }
            }
        }
    }
    async muteUser(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let muteUserInfo = await this.roomBannedUserServ.muteUser(data.userName, data.roomId, data.periode);
                let recvSockts = sockets.get(data.userName);
                if (muteUserInfo !== "null") {
                    for (let sock of recvSockts) {
                        sock.emit("mutedUser", muteUserInfo);
                    }
                }
            }
        }
    }
    async banUser(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                let muteUserInfo = await this.roomBannedUserServ.banUser(data.userName, data.roomId);
                let recvSockts = sockets.get(data.userName);
                if (muteUserInfo !== "null") {
                    for (let sock of recvSockts) {
                        sock.leave(data.roomId.toString());
                    }
                }
            }
        }
    }
    async kickUser(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                await this.chatRoomServ.deleteUser(data.roomId, data.userName);
                let kickedSocket = sockets.get(data.userName);
                if (kickedSocket !== null) {
                    for (let sock of kickedSocket) {
                        sock.leave(data.roomId.toString());
                    }
                }
            }
        }
    }
    async changeUserName(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
                if ((await this.userServ.findUser(userInfo[0].userName, data.userName, userInfo[0].email)) === true) {
                    let newMap = new Map();
                    for (let [key, value] of sockets) {
                        if (key == userInfo[0].userName) {
                            newMap.set(data.userName, value);
                        }
                        else
                            newMap.set(key, value);
                    }
                    sockets = newMap;
                    for (let [key, value] of sockets) {
                    }
                    this.messageServ.changeName(userInfo[0].userName, data.userName);
                    this.chatRoomServ.changeName(userInfo[0].userName, data.userName);
                    this.roomMessageServ.changeName(userInfo[0].userName, data.userName);
                    this.roomBannedUserServ.changeName(userInfo[0].userName, data.userName);
                    this.notifServ.changeName(userInfo[0].userName, data.userName);
                }
            }
        }
    }
    async Refreche(client, data) {
        let auth_token = client.handshake.auth.Authorization;
        if (auth_token !== "null" && auth_token !== "undefined" && auth_token) {
            const tokenInfo = this.jwtService.decode(auth_token);
            let userInfo = await this.usersRepository.query(`select "userName" from public."Users" WHERE public."Users".email = '${tokenInfo.userId}'`);
            if (Object.keys(userInfo).length !== 0) {
            }
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Socket)
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
    (0, websockets_1.SubscribeMessage)('addWatcher'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "addWatcher", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('acceptInvite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "acceptInvite", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('declineInvite'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "declineInvite", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('leaving'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "leaving", null);
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
    (0, websockets_1.SubscribeMessage)('creatChannel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "creatChannel", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('roomMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "handleRoomMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('addUserToChannel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "addUserToChannel", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('notification'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "handleNotification", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('muteUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "muteUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('banUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "banUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('kickUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "kickUser", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('changeUserName'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "changeUserName", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('Refreche'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], chatGateway.prototype, "Refreche", null);
chatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [message_service_1.messageService, user_service_1.UserService,
        typeorm_2.Repository,
        liveGame_service_1.liveGameService,
        gamePlay_service_1.default,
        roomMessage_service_1.roomMessageService,
        chatRoom_service_1.chatRoomService,
        jwt_1.JwtService,
        game_service_1.GamesService,
        roomsBannedUser_service_1.roomBannedUserService,
        notification_service_1.notificationService])
], chatGateway);
exports.chatGateway = chatGateway;
//# sourceMappingURL=chat.gateway.js.map