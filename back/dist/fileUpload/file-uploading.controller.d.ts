import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { UserService } from 'src/user/user.service';
export declare class uploadController {
    private userRepo;
    private readonly userService;
    constructor(userRepo: Repository<User>, userService: UserService);
    uploadedFile(file: any, request: Request): Promise<{
        originalname: any;
        filename: any;
    }>;
    uploadMultipleFiles(files: any): Promise<any[]>;
    seeUploadedFile(image: any, res: any): any;
}
