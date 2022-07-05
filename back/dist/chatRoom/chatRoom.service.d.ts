import { chatRoom } from "src/entities/chatRoom.entity";
import { Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/entities/user.entity";
import { UserService } from "src/user/user.service";
import { roomMessageService } from "./roomMessage.service";
export declare class chatRoomService {
    private userServ;
    private RoomRepository;
    private usersRepository;
    private messageServ;
    private readonly jwtService;
    constructor(userServ: UserService, RoomRepository: Repository<chatRoom>, usersRepository: Repository<User>, messageServ: roomMessageService, jwtService: JwtService);
    createRoom(owner: string, data: any): Promise<chatRoom>;
    getRoomById(roomId: number): Promise<chatRoom>;
    addUsersToChannel(roomId: number, users: any): Promise<void>;
    getPublicRooms(): Promise<chatRoom[]>;
    getAllRooms(): Promise<{
        public: chatRoom[];
        private: chatRoom[];
    }>;
    changeOwner(roomId: number, newOwner: any): Promise<void>;
    deleteRoom(roomId: number): Promise<void>;
    deleteUser(roomId: number, userToDelete: string): Promise<void>;
    addAdministrator(roomId: number, userName: string): Promise<void>;
    changeRoomPassword(roomId: number, newPassword: string): Promise<void>;
    changeRoomName(roomId: number, newName: string): Promise<void>;
    checkPassword(roomId: number, password: string): Promise<boolean>;
    changeName(oldUserName: string, newUserName: string): Promise<void>;
}
