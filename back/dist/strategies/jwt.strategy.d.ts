import { Repository } from 'typeorm';
import { RefreshToken } from '../entities/refresh-token.entity';
import { User } from '../entities/user.entity';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    private tokenRepository;
    private userRepository;
    constructor(tokenRepository: Repository<RefreshToken>, userRepository: Repository<User>);
    validate(payload: any): unknown;
}
export {};
