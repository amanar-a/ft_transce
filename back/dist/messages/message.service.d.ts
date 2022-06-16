import { messageDto } from 'src/dto-classes/message.dtp';
import { messages } from 'src/entities/message.entity';
import { Repository } from "typeorm";
export declare class messageService {
    private messageRep;
    constructor(messageRep: Repository<messages>);
    getMessageById(username: number): Promise<messages>;
    createMessage(message: messageDto): Promise<messageDto & messages>;
    getConversation(SId: string, RId: string): Promise<any>;
    getConntact(user: string): Promise<any>;
}
