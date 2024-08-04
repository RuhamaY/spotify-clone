import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService){}

    @Post()
    create(@Body() CreateSongDTO: CreateSongDTO){
        return this.songsService.create(CreateSongDTO);
    }

    @Get()
    findAll(){
        try{
        return this.songsService.findAll();
        }
        catch(e){
            throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause:e,
            },)
        }
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id:number){
        return `find a song by id ${typeof id}`;
    }

    @Put(':id')
    update(){
        return 'update song by id';
    }

    @Delete(':id')
    delete(){
        return 'delete songs by id';
    }
}
