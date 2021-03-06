import {Column, createConnection, CreateDateColumn, Entity, PrimaryGeneratedColumn}
from 'typeorm';

@Entity()
export class Tasks{
    @PrimaryGeneratedColumn()
    id: number;

    @Column ()
    title: string;

    @Column ()
    description: string;

    @Column({
        default: false
    })
    finished: boolean;

    @CreateDateColumn()
    creat_at: Date;

    @CreateDateColumn()
    update_at: Date;
    

}