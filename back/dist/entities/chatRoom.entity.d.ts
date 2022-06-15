import { BaseEntity } from "typeorm";
import { roomMessage } from "./roomMessage.entity";
import { User } from "./user.entity";
export declare class chatRoom extends BaseEntity {
    id: number;
    RoomOwner: string;
    name: string;
    type: string;
    protected: boolean;
    password: string;
    messageId: roomMessage[];
    members: User[];
}
