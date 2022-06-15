import { messageDto } from 'src/dto-classes/message.dtp';
import { messages } from 'src/entities/message.entity';
import { Repository } from "typeorm";
export declare class messageService {
    private messageRep;
    constructor(messageRep: Repository<messages>);
    getMessageById(username: number): unknown;
    createMessage(message: messageDto): unknown;
    getConversation(SId: string, RId: string): unknown;
    getConntact(user: string): unknown;
}
