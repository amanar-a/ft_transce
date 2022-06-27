import { JwtService } from "@nestjs/jwt";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { chatRoomService } from "../chatRoom/chatRoom.service";
import { roomMessageService } from "src/chatRoom/roomMessage.service";
import { User } from "../entities/user.entity";
import { GamesService } from "../games/game.service";
import { liveGameService } from "../liveGame/liveGame.service";
import { messageService } from "../messages/message.service";
import { notificationService } from "../notification/notification.service";
import { UserService } from "../user/user.service";
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
    server: any[];
    handleDisconnect(client: Socket): Promise<void>;
    handleConnection(client: Socket, ...args: any): Promise<void>;
    handleMessage(client: Socket, text: any): Promise<void>;
    matchmaking(client: Socket, body: any): Promise<void>;
    leaving(client: Socket, test: any): Promise<void>;
    setInterval(client: Socket, test: any): Promise<void>;
    addWatcher(client: Socket, body: any): Promise<void>;
    playing(client: Socket, body: moveData): Promise<void>;
    handleChannels(client: Socket, text: any): Promise<void>;
    creatChannel(client: Socket, data: any): Promise<void>;
    handleRoomMessage(client: Socket, data: any): Promise<void>;
    handleNotification(client: Socket, data: any): Promise<void>;
}
