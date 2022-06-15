import { LiveGameDto } from "src/dto-classes/liveGame.dto";
import { liveGame } from "src/entities/liveGame.entity";
import { Repository } from "typeorm";
export declare class liveGameService {
    private liveGameRepository;
    constructor(liveGameRepository: Repository<liveGame>);
    saveGame(game: LiveGameDto): any;
    getGame(player: string): unknown;
    getGameByPlayer(player: string): unknown;
    deleteGame(player: string): any;
    getgames(): unknown;
}
