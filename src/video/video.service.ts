import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
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

    async PushVideo(dto: CreateVideoDto){
        const video = this.videoDB.find((i: IVideo) => i.url == dto.url)
        if(video){
            throw new HttpException('This video already exist in gallery', HttpStatus.CONFLICT)
        }
        dto.id = this.videoDB.length +1
        this.videoDB.push(dto)
        return video
    }
}
