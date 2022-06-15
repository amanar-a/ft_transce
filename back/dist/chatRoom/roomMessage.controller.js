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
exports.roomMessageController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const roomMessage_entity_1 = require("../entities/roomMessage.entity");
const roomMessage_service_1 = require("./roomMessage.service");
let roomMessageController = class roomMessageController {
    constructor(RoomService, roomMessageRep, usersRepository, jwtService) {
        this.RoomService = RoomService;
        this.roomMessageRep = roomMessageRep;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async createRoomMessage(data) {
        let rMessage = await this.roomMessageRep.save(data);
        return rMessage;
    }
    async getRoomMessages(data) {
        let rMessages = await this.roomMessageRep.findBy({ roomId: data });
        return (rMessages);
    }
};
roomMessageController = __decorate([
    (0, common_1.Controller)('roomMessage'),
    __param(1, (0, typeorm_1.InjectRepository)(roomMessage_entity_1.roomMessage)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [roomMessage_service_1.roomMessageService, typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], roomMessageController);
exports.roomMessageController = roomMessageController;
//# sourceMappingURL=roomMessage.controller.js.map