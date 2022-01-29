import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IVideo } from './interface/interface.interface';

@Injectable()
export class VideoService {
    private videoDB: IVideo[]

    constructor(){
        this.videoDB = [
            {id: 1, name: 'Tokyo Ghoul: 1 episode', url: 'https://tokyoghoul/1', description: 'Fisrt episode of Tokyo Ghoul'},
            {id: 2, name: 'Tokyo Ghoul: 2 episode', url: 'https://tokyoghoul/2', description: 'Second episode of Tokyo Ghoul'}
        ]
    }

    async findByWord(word: string){
        const video = this.videoDB.filter((i: IVideo) => i.name.toLowerCase().includes(word))
        if(!video){
            throw new HttpException(`По запросу ${word} ничего не найдено`, HttpStatus.NOT_FOUND)
        }
        return video
    }
}
