import { JwtService } from "@nestjs/jwt";
import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { chatRoomService } from "src/chatRoom/chatRoom.service";
import { roomMessageService } from "src/chatRoom/roomMessage.service";
import { User } from "src/entities/user.entity";
import { GamesService } from "src/games/game.service";
import { liveGameService } from "src/liveGame/liveGame.service";
import { messageService } from "src/messages/message.service";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { gamePlayService } from "./gamePlay.service";
export declare class moveData {
    player1: number;
    player2: number;
    movement: string;
}
export declare class chatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private messageServ;
    private userServ;
    private usersRepository;
    private gamePlaysServ;
    private liveGameServ;
    private roomMessageServ;
    private chatRoomServ;
    private readonly jwtService;
    private gameServ;
    constructor(messageServ: messageService, userServ: UserService, usersRepository: Repository<User>, gamePlaysServ: gamePlayService, liveGameServ: liveGameService, roomMessageServ: roomMessageService, chatRoomServ: chatRoomService, jwtService: JwtService, gameServ: GamesService);
    server: any[];
    handleDisconnect(client: Socket): Promise<void>;
    handleConnection(client: Socket, ...args: any): Promise<void>;
    handleMessage(client: Socket, text: any): Promise<void>;
    matchmaking(client: Socket, test: any): Promise<void>;
    setInterval(client: Socket, test: any): Promise<void>;
    playing(client: Socket, body: moveData): Promise<void>;
    handleChannels(client: Socket, text: any): Promise<void>;
    handleRoomMessage(client: Socket, data: any): Promise<void>;
}
