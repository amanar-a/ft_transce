"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GateWayModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const chatRoom_module_1 = require("../chatRoom/chatRoom.module");
const chatRoom_service_1 = require("../chatRoom/chatRoom.service");
const roomMessage_service_1 = require("../chatRoom/roomMessage.service");
const chatRoom_entity_1 = require("../entities/chatRoom.entity");
const game_entity_1 = require("../entities/game.entity");
const liveGame_entity_1 = require("../entities/liveGame.entity");
const message_entity_1 = require("../entities/message.entity");
const roomMessage_entity_1 = require("../entities/roomMessage.entity");
const user_entity_1 = require("../entities/user.entity");
const game_module_1 = require("../games/game.module");
const game_service_1 = require("../games/game.service");
const liveGame_service_1 = require("../liveGame/liveGame.service");
const message_controller_1 = require("../messages/message.controller");
const message_module_1 = require("../messages/message.module");
const message_service_1 = require("../messages/message.service");
const user_service_1 = require("../user/user.service");
const chat_gateway_1 = require("./chat.gateway");
const gamePlay_service_1 = require("./gamePlay.service");
let GateWayModule = class GateWayModule {
};
GateWayModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, message_entity_1.messages, roomMessage_entity_1.roomMessage, game_entity_1.Games, liveGame_entity_1.liveGame, chatRoom_entity_1.chatRoom]),
            jwt_1.JwtModule.register({ secret: 'bda1843e3fa6f42e528dd2ec9f088a1d4b181d525faa9caaf65c9b3ca978ef54' }), message_module_1.MessageModule, chatRoom_module_1.chatRoomModule, game_module_1.gameModule],
        controllers: [message_controller_1.messageController],
        providers: [chat_gateway_1.chatGateway, user_service_1.UserService, message_service_1.messageService, liveGame_service_1.liveGameService, roomMessage_service_1.roomMessageService, game_service_1.GamesService, chatRoom_service_1.chatRoomService, gamePlay_service_1.gamePlayService]
    })
], GateWayModule);
exports.GateWayModule = GateWayModule;
//# sourceMappingURL=gateway.module.js.map