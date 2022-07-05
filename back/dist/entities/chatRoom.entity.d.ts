import { BaseEntity } from "typeorm";
import { User } from "./user.entity";
export declare class chatRoom extends BaseEntity {
    id: number;
    RoomOwner: string;
    name: string;
    type: string;
    protected: boolean;
    password: string;
    members: User[];
    Administrators: User[];
}
