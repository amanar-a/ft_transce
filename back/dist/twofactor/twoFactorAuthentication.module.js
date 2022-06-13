"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("../entities/user.entity");
const user_module_1 = require("../user/user.module");
const refresh_token_entity_1 = require("../entities/refresh-token.entity");
const _42_strategy_1 = require("../strategies/42.strategy");
const twoFactorAuthentication_controller_1 = require("./twoFactorAuthentication.controller");
const twoFactorAuthentication_service_1 = require("./twoFactorAuthentication.service");
let TwoFaModule = class TwoFaModule {
};
TwoFaModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, typeorm_1.TypeOrmModule.forFeature([refresh_token_entity_1.RefreshToken]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
        ],
        providers: [auth_service_1.AuthService, twoFactorAuthentication_service_1.TwoFactorAuthenticationService, _42_strategy_1.FtAuthStrategy],
        controllers: [twoFactorAuthentication_controller_1.TwoFactorAuthenticationController]
    })
], TwoFaModule);
exports.TwoFaModule = TwoFaModule;
//# sourceMappingURL=twoFactorAuthentication.module.js.map