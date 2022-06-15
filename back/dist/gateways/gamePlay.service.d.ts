import { Socket } from "socket.io";
import { LiveGameDto } from "src/dto-classes/liveGame.dto";
import { GamesService } from "src/games/game.service";
import { liveGameService } from "src/liveGame/liveGame.service";
export default class gamePlayService {
    private gameServ;
    private liveGameServ;
    constructor(gameServ: GamesService, liveGameServ: liveGameService);
    init(player1: string, player2: string, playersStat: any, ballStat: any): void;
    movingPaddles(playersStat: any, player: string, movement: any, player1: Socket[], player2: Socket[], liveGame: LiveGameDto): void;
    movingBall(player: string, ballStat: any, playersStat: any, player1: Socket[], player2: Socket[], intervals: any): void;
    changeTraject(impact: number): {
        y: number;
        x: number;
    };
}
