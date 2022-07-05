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
exports.chatRoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const chatRoom_entity_1 = require("../entities/chatRoom.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../entities/user.entity");
const user_service_1 = require("../user/user.service");
const roomMessage_service_1 = require("./roomMessage.service");
const bcrypt = require("bcrypt");
let chatRoomService = class chatRoomService {
    constructor(userServ, RoomRepository, usersRepository, messageServ, jwtService) {
        this.userServ = userServ;
        this.RoomRepository = RoomRepository;
        this.usersRepository = usersRepository;
        this.messageServ = messageServ;
        this.jwtService = jwtService;
    }
    async createRoom(owner, data) {
        console.log("data=", data);
        let user = await this.usersRepository.findOneBy({ userName: owner });
        let room = await this.RoomRepository.create({ RoomOwner: owner });
        room.members = [user];
        room.RoomOwner = owner;
        console.log(data.name);
        room.name = data.name;
        room.type = data.type;
        room.protected = data.protected;
        room.Administrators = [user];
        if (room.protected == true) {
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(data.password, saltOrRounds);
            room.password = hash;
        }
        if (data.users !== undefined) {
            for (let us of data.users) {
                let userInfo = await this.usersRepository.findOneBy({ userName: us.userName });
                room.members = [...room.members, userInfo];
            }
        }
        return await this.RoomRepository.save(room);
    }
    async getRoomById(roomId) {
        let room = await this.RoomRepository
            .createQueryBuilder("chat")
            .leftJoinAndSelect("chat.members", "members")
            .leftJoinAndSelect("chat.Administrators", "admins")
            .where('chat.id = :id', { id: roomId })
            .getOne();
        return room;
    }
    async addUsersToChannel(roomId, users) {
        let room = await this.getRoomById(roomId);
        console.log(room);
        if (users.length !== 0) {
            users.map(async (e) => {
                let userInfo = await this.usersRepository.findOneBy({ userName: e.userName });
                room.members = [...room.members, userInfo];
            });
        }
        await room.save();
    }
    async getPublicRooms() {
        return await this.RoomRepository.findBy({ type: "public" });
    }
    async getAllRooms() {
        let PbRoom = await this.RoomRepository
            .createQueryBuilder("chat")
            .leftJoinAndSelect("chat.members", "Users").where('chat.type = :type', { type: "public" })
            .getMany();
        let PrRoom = await this.RoomRepository
            .createQueryBuilder("chat")
            .leftJoinAndSelect("chat.members", "Users").where('chat.type = :type', { type: "private" })
            .getMany();
        return { public: PbRoom, private: PrRoom };
    }
    async changeOwner(roomId, newOwner) {
        let room = await this.getRoomById(roomId);
        room.RoomOwner = newOwner;
        await room.save();
    }
    async deleteRoom(roomId) {
        await this.RoomRepository.delete({ id: roomId });
        await this.messageServ.deleteMessagesRoom(roomId);
    }
    async deleteUser(roomId, userToDelete) {
        var _a, _b;
        let room = await this.getRoomById(roomId);
        console.log(room);
        let i = 0;
        let index = -1;
        if (room) {
            (_a = room.members) === null || _a === void 0 ? void 0 : _a.map(async (e) => {
                if (e.userName === userToDelete) {
                    index = i;
                }
                i++;
            });
            if (index !== -1) {
                if (room.members[index].userName === room.RoomOwner)
                    room.RoomOwner = room.members[0].userName;
                room.members.splice(index, 1);
            }
            index = -1;
            i = 0;
            (_b = room.administrators) === null || _b === void 0 ? void 0 : _b.map(async (e) => {
                if (e.userName === userToDelete) {
                    index = i;
                }
                i++;
            });
            if (index !== -1)
                room.administrators.splice(index, 1);
            if (room.members.length === 0) {
                console.log("im In delete Room");
                this.deleteRoom(room.id);
                return;
            }
            await room.save();
        }
    }
    async addAdministrator(roomId, userName) {
        let room = await this.getRoomById(roomId);
        let user = await this.usersRepository.findOneBy({ userName: userName });
        room.Administrators = [...room.Administrators, user];
        await room.save();
    }
    async changeRoomPassword(roomId, newPassword) {
        let room = await this.getRoomById(roomId);
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(newPassword, saltOrRounds);
        room.password = hash;
        await room.save();
    }
    async changeRoomName(roomId, newName) {
        let room = await this.getRoomById(roomId);
        room.name = newName;
        await room.save();
    }
    async checkPassword(roomId, password) {
        let room = await this.getRoomById(roomId);
        return await bcrypt.compare(password, room.password);
    }
    async changeName(oldUserName, newUserName) {
        await this.RoomRepository.query(`UPDATE public."chat" SET "RoomOwner"='${newUserName}' WHERE "RoomOwner"='${oldUserName}'`);
    }
};
chatRoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(chatRoom_entity_1.chatRoom)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        roomMessage_service_1.roomMessageService,
        jwt_1.JwtService])
], chatRoomService);
exports.chatRoomService = chatRoomService;
//# sourceMappingURL=chatRoom.service.js.map