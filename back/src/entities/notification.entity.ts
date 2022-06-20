import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('notification')

export default class Notification extends BaseEntity
{
    @PrimaryGeneratedColumn({
        comment : 'the quiz unique indentifier',
    })
    id : number

    @Column()
    senderName : string
    @Column()
    reciverName : string

    @Column()
    type : string

    @Column()
    time : Date

}
