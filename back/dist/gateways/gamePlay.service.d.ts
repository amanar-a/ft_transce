import { Socket } from "socket.io";
import { LiveGameDto } from "src/dto-classes/liveGame.dto";
export declare class gamePlayService {
    constructor();
    init(player1: string, player2: string, playersStat: any, ballStat: any): void;
    movingPaddles(playersStat: any, player: string, movement: any, player1: Socket[], player2: Socket[], liveGame: LiveGameDto): void;
    movingBall(player: string, ballStat: any, playersStat: any, player1: Socket[], player2: Socket[]): void;
    changeTraject(impact: number): {
        y: number;
        x: number;
    };
}
