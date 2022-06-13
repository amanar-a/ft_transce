import { JwtService } from "@nestjs/jwt";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { roomMessage } from "src/entities/roomMessage.entity";
import { roomMessageService } from "./roomMessage.service";
export declare class roomMessageController {
    private readonly RoomService;
    private roomMessageRep;
    private usersRepository;
    private readonly jwtService;
    constructor(RoomService: roomMessageService, roomMessageRep: Repository<roomMessage>, usersRepository: Repository<User>, jwtService: JwtService);
    createRoomMessage(data: any): Promise<any>;
    getRoomMessages(data: any): Promise<roomMessage[]>;
}
