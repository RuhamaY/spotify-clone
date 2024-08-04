import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, isNotEmpty, IsString, isString } from "class-validator";

export class CreateSongDTO{
    
    @IsNotEmpty()
    @IsString()
    readonly title:string;

    @IsNotEmpty()
    @IsString()
    readonly artist:string;

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate:Date;

    @IsNotEmpty()
    @IsMilitaryTime()
    readonly duration:Date;
}