import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {

    private readonly songs = [];

    create(song){
        this.songs.push(song);
        return this.songs;
    }

    findAll(){
        throw new Error('error in the data base while fetching record.');
        return this.songs;
    }
}
