import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { get } from 'http';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {

    constructor(private songsService: SongsService){}

    @Post()
    create(){
        return this.songsService.create('animals by maretin garrex');
    }

    @Get()
    findAll(){
        return this.songsService.findAll();
    }

    @Get(':id')
    findOne(){
        return 'find a song by id';
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
