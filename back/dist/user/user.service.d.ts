import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dto-classes/user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UserService {
    private usersRepository;
    private readonly jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    setTwoFactorAuthenticationSecret(secret: string, email: string): Promise<import("typeorm").UpdateResult>;
    turnOnTwoFactorAuthentication(email: string): Promise<void>;
    InsertUser(userDto: UserDto): Promise<string>;
    findAll(): Promise<any>;
    findUser(oldUserName: string, newUserName: string, email: any): Promise<boolean>;
    updateActive(stats: Boolean, userName: string): Promise<void>;
    findByemail(email: string): Promise<User>;
    getUserJwt(token: string): Promise<User>;
    findByUserName(userName: string): Promise<User>;
    updateUsername(newName: string, oldName: string): Promise<void>;
}
