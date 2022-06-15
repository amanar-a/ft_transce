import { chatRoom } from "src/entities/chatRoom.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/entities/user.entity";
import { UserService } from "src/user/user.service";
export declare class chatRoomService {
    private userServ;
    private RoomRepository;
    private usersRepository;
    private readonly jwtService;
    constructor(userServ: UserService, RoomRepository: Repository<chatRoom>, usersRepository: Repository<User>, jwtService: JwtService);
    createRoom(owner: string, data: any): unknown;
    getRoomById(gameId: number): unknown;
}
