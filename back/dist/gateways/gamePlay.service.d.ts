import { LiveGameDto } from "src/dto-classes/liveGame.dto";
import { GamesService } from "src/games/game.service";
import { liveGameService } from "src/liveGame/liveGame.service";
export default class gamePlayService {
    private gameServ;
    private liveGameServ;
    constructor(gameServ: GamesService, liveGameServ: liveGameService);
    init(player1: string, player2: string, playersStat: any, ballStat: any, watchers: any, mods: any): void;
    movingPaddles(playersStat: any, player: string, movement: any, sockets: any, liveGame: LiveGameDto, watchers: any): void;
    movingBall(player: string, ballStat: any, playersStat: any, sockets: any, intervals: any, watchers: any): void;
    checkWatchers(watchers: any, userName: string): void;
    clearGames(intervals: any, ballStat: any, playersStat: any, userName: string, mods: any): void;
    changeTraject(impact: number): {
        y: number;
        x: number;
    };
}
