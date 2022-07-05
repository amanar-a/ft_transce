"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const chatRoom_module_1 = require("./chatRoom/chatRoom.module");
const file_upload_module_1 = require("./fileUpload/file-upload.module");
const friends_module_1 = require("./friends/friends.module");
const game_module_1 = require("./games/game.module");
const gateway_module_1 = require("./gateways/gateway.module");
const live_game_module_1 = require("./liveGame/live.game.module");
const message_module_1 = require("./messages/message.module");
const notification_module_1 = require("./notification/notification.module");
const twoFactorAuthentication_module_1 = require("./twofactor/twoFactorAuthentication.module");
const typeormcofig_1 = require("./typeormcofig");
const user_module_1 = require("./user/user.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, notification_module_1.NotificationModule, chatRoom_module_1.chatRoomModule, message_module_1.MessageModule, twoFactorAuthentication_module_1.TwoFaModule, game_module_1.gameModule, auth_module_1.AuthModule, file_upload_module_1.UploadModule, friends_module_1.FriendsModule, gateway_module_1.GateWayModule, typeorm_1.TypeOrmModule.forRoot(typeormcofig_1.typeOrmConfig),
            live_game_module_1.livegamemodule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map