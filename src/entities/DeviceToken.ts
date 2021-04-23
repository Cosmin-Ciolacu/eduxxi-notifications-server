import {PrimaryGeneratedColumn, Column, BaseEntity, Entity} from "typeorm";

@Entity()
export class DeviceToken extends BaseEntity {

    @PrimaryGeneratedColumn({type: "bigint"}) id: number;

    @Column() token: string;

}