import { Response } from 'express';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthService } from './auth.service';
import RefreshTokenDto from '../dto-classes/refresh-token.dto';
export declare class AuthController {
    private readonly authService;
    private usersRepository;
    constructor(authService: AuthService, usersRepository: Repository<User>);
    auth42(): any;
    asyncgoogleAuthRedirect(req: any, response: Response, ip: any): any;
    refreshToken(body: RefreshTokenDto): unknown;
    logout(req: any, body: RefreshTokenDto): unknown;
}
