import { FriendShip } from "src/entities/friendShip.entity";
export declare class FriendsInviteDto extends FriendShip {
    winner_user: string;
    loser_user: string;
    Score: string;
    played_at: Date;
}
