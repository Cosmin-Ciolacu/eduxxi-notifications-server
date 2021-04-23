import {IsString} from "class-validator";

export class SubscribeBody {

    @IsString() token: string;
    
}
