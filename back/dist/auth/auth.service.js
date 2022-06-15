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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto-classes/user.dto");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const refresh_token_entity_1 = require("../entities/refresh-token.entity");
(0, dotenv_1.config)();
let AuthService = class AuthService {
    constructor(usersRepository, tokenRepository) {
        this.usersRepository = usersRepository;
        this.tokenRepository = tokenRepository;
    }
    async retrieveRefreshToken(refreshStr) {
        try {
            const decoded = (0, jsonwebtoken_1.verify)(refreshStr, process.env.REFRESH_SECRET);
            console.log(decoded);
            if (typeof decoded === 'string') {
                return undefined;
            }
            let emaile = decoded.email;
            return Promise.resolve(await this.tokenRepository.findOneBy({ email: decoded.email }));
        }
        catch (e) {
            console.log(e.message);
            return undefined;
        }
    }
    async newRefreshAndAccessToken(email, isSecondFacotrAuthenticated = false, values) {
        const refreshObject = new refresh_token_entity_1.RefreshToken();
        refreshObject.email = email;
        refreshObject.ipAddress = values.ipAddress;
        refreshObject.userAgent = 'testtest';
        this.tokenRepository.save(refreshObject);
        return {
            refreshToken: refreshObject.sign(),
            accessToken: (0, jsonwebtoken_1.sign)({
                userId: email,
                isSecondFacotrAuthenticated: isSecondFacotrAuthenticated,
            }, process.env.ACCESS_SECRET, {
                expiresIn: '12d',
            }),
        };
    }
    async refresh(refreshStr) {
        const refreshToken = await this.retrieveRefreshToken(refreshStr);
        if (!refreshToken) {
            return undefined;
        }
        const user = await this.usersRepository.findOneBy({
            email: refreshToken.email,
        });
        console.log('______)', user);
        if (!user) {
            return undefined;
        }
        const accessToken = {
            userId: refreshToken.email,
        };
        return (0, jsonwebtoken_1.sign)(accessToken, process.env.ACCESS_SECRET, { expiresIn: '12d' });
    }
    async logout(refreshStr) {
        const refreshToken = await this.retrieveRefreshToken(refreshStr);
        console.log('------------------');
        console.log(refreshToken);
        if (!refreshToken)
            return;
        console.log('------------------');
        await this.tokenRepository.query(`DELETE FROM public.refresh_token WHERE "email" = '${refreshToken.email}'`);
    }
    async cheskUser(req) {
        let exist = await this.usersRepository.findOne({
            where: {
                email: req.user.email,
            },
        });
        if (exist && exist.isTwoFactorAuthenticationEnabled === true)
            return 1;
        else if (exist)
            return 2;
        return 0;
    }
    async Login(req, res, values) {
        if (!req.user)
            return 'No user from intra';
        let userDto = new user_dto_1.UserDto();
        userDto.email = req.user.email;
        userDto.firstName = req.user.firstName;
        userDto.lastName = req.user.lastName;
        userDto.picture = req.user.picture;
        userDto.isActive = true;
        let exist;
        if ((exist = await this.cheskUser(req)) == 0) {
            userDto.userName = req.user.email.split('@')[0];
            await this.usersRepository.save(userDto);
        }
        console.log('id : ', req.user);
        return {
            refAcc: await this.newRefreshAndAccessToken(userDto.email, false, values),
            UserEmail: userDto.email,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(refresh_token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map