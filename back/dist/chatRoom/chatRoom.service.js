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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatRoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chatRoom_entity_1 = require("../entities/chatRoom.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../entities/user.entity");
const user_service_1 = require("../user/user.service");
let chatRoomService = class chatRoomService {
    constructor(userServ, RoomRepository, usersRepository, jwtService) {
        this.userServ = userServ;
        this.RoomRepository = RoomRepository;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async createRoom(owner, data) {
        let userName = owner;
        let user = await this.usersRepository.findOneBy({ userName: userName });
        let room = await this.RoomRepository.create({ RoomOwner: userName });
        room.members = [user];
        room.RoomOwner = owner;
        room.name = data.name;
        room.type = data.type;
        room.protected = data.protected;
        if (room.protected == true)
            room.password = data.password;
        if (data.users.length != 0) {
            for (let us of data.users) {
                let userInfo = await this.usersRepository.findOneBy({ userName: us.userName });
                room.members = [...room.members, userInfo];
            }
        }
        return await this.RoomRepository.save(room);
    }
    async getRoomById(gameId) {
        console.log("here");
        let game = await this.RoomRepository
            .createQueryBuilder("chat")
            .leftJoinAndSelect("chat.members", "Users").where('chat.id = :id', { id: gameId })
            .getOne();
        return game;
    }
};
chatRoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(chatRoom_entity_1.chatRoom)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_service_1.UserService, typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], chatRoomService);
exports.chatRoomService = chatRoomService;
//# sourceMappingURL=chatRoom.service.js.map