"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const user_module_1 = require("../user/user.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const refresh_token_entity_1 = require("../entities/refresh-token.entity");
const _42_strategy_1 = require("../strategies/42.strategy");
const jwt_strategy_1 = require("../strategies/jwt.strategy");
const twoFactorAuthentication_service_1 = require("../twofactor/twoFactorAuthentication.service");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, typeorm_1.TypeOrmModule.forFeature([refresh_token_entity_1.RefreshToken, user_entity_1.User]),
            jwt_1.JwtModule.register({ secret: process.env.ACCESS_SECRET })
        ],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy, twoFactorAuthentication_service_1.TwoFactorAuthenticationService, _42_strategy_1.FtAuthStrategy],
        controllers: [auth_controller_1.AuthController]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map