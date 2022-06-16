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
exports.uploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const typeorm_1 = require("@nestjs/typeorm");
const multer_1 = require("multer");
const user_entity_1 = require("../entities/user.entity");
const file_upload_utis_1 = require("./file-upload.utis");
const typeorm_2 = require("typeorm");
const jwt_auth_gguard_1 = require("../guards/jwt-auth.gguard");
const user_service_1 = require("../user/user.service");
let uploadController = class uploadController {
    constructor(userRepo, userService) {
        this.userRepo = userRepo;
        this.userService = userService;
    }
    async uploadedFile(file, request) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        const jwt = request.headers.authorization.replace('Bearer ', '');
        let user = await this.userService.getUserJwt(jwt);
        let root = 'http://10.12.11.3:3000/upload/' + response.filename;
        await this.userRepo
            .createQueryBuilder('Users')
            .update('User')
            .set({ picture: root })
            .where('userName = :userName', { userName: user.userName })
            .execute();
        return response;
    }
    async uploadMultipleFiles(files) {
        const response = [];
        files.forEach((file) => {
            const fileReponse = {
                originalname: file.originalname,
                filename: file.filename,
            };
            response.push(fileReponse);
        });
        return response;
    }
    seeUploadedFile(image, res) {
        return res.sendFile(image, { root: './files' });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_gguard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image', {
        storage: (0, multer_1.diskStorage)({
            destination: './files',
            filename: file_upload_utis_1.editFileName,
        }),
        fileFilter: file_upload_utis_1.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], uploadController.prototype, "uploadedFile", null);
__decorate([
    (0, common_1.Post)('multiple'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('image', 20, {
        storage: (0, multer_1.diskStorage)({
            destination: './files',
            filename: file_upload_utis_1.editFileName,
        }),
        fileFilter: file_upload_utis_1.imageFileFilter,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], uploadController.prototype, "uploadMultipleFiles", null);
__decorate([
    (0, common_1.Get)(':imgpath'),
    __param(0, (0, common_1.Param)('imgpath')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], uploadController.prototype, "seeUploadedFile", null);
uploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], uploadController);
exports.uploadController = uploadController;
//# sourceMappingURL=file-uploading.controller.js.map