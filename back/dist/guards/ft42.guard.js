"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ft42AuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
let Ft42AuthGuard = class Ft42AuthGuard extends (0, passport_1.AuthGuard)('42') {
    handleRequest(err, user, info) {
        console.log("from guard");
        console.log(user);
        console.log("---------------------");
        if (info &&
            info.message ===
                'The resource owner or authorization server denied the request.')
            return 'failure';
        else if (err || !user) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
};
Ft42AuthGuard = __decorate([
    (0, common_1.Injectable)()
], Ft42AuthGuard);
exports.Ft42AuthGuard = Ft42AuthGuard;
//# sourceMappingURL=ft42.guard.js.map