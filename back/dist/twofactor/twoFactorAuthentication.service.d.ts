import { Response } from 'express';
import { UserService } from 'src/user/user.service';
export declare class TwoFactorAuthenticationService {
    private readonly usersService;
    constructor(usersService: UserService);
    generateTwoFactorAuthenticationSecret(user: any): unknown;
    isTwoFactorAuthenticationCodeValid(twoFactorAuthenticationCode: string, email: string): unknown;
    pipeQrCodeStream(stream: Response, otpauthUrl: string): unknown;
}
