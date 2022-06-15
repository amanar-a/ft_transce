import { JwtService } from "@nestjs/jwt";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { chatRoomService } from "src/chatRoom/chatRoom.service";
import { roomMessageService } from "src/chatRoom/roomMessage.service";
import { User } from "src/entities/user.entity";
import { GamesService } from "src/games/game.service";
import { liveGameService } from "src/liveGame/liveGame.service";
import { messageService } from "src/messages/message.service";
import { notificationService } from "src/notification/notification.service";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import gamePlayService from "./gamePlay.service";
export declare class moveData {
    player1: number;
    player2: number;
    movement: string;
}
export declare class chatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private messageServ;
    private userServ;
    private usersRepository;
    private liveGameServ;
    private gamePlaysServ;
    private roomMessageServ;
    private chatRoomServ;
    private readonly jwtService;
    private gameServ;
    private notifServ;
    constructor(messageServ: messageService, userServ: UserService, usersRepository: Repository<User>, liveGameServ: liveGameService, gamePlaysServ: gamePlayService, roomMessageServ: roomMessageService, chatRoomServ: chatRoomService, jwtService: JwtService, gameServ: GamesService, notifServ: notificationService);
    server: {};
    handleDisconnect(client: Socket): any;
    handleConnection(client: Socket, ...args: any): any;
    handleMessage(client: Socket, text: any): any;
    matchmaking(client: Socket, test: any): any;
    setInterval(client: Socket, test: any): any;
    playing(client: Socket, body: moveData): any;
    handleChannels(client: Socket, text: any): any;
    creatChannel(client: Socket, data: any): any;
    handleRoomMessage(client: Socket, data: any): any;
    handleNotification(client: Socket, data: any): any;
}
