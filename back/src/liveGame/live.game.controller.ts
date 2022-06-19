import { liveGameService } from "./liveGame.service";
import { Controller, Get } from '@nestjs/common';



@Controller('livegames')
export class livegamecontroller{

    constructor(private readonly livegameservice: liveGameService)
    {}

    @Get()
    async getlivegames()
    {
        return this.livegameservice.getgames();
    }
}