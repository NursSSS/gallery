import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CreateVideoDto } from './dto/create-video.dto';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(private readonly service: VideoService){}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }

    @Get(':word')
    async findByWord(@Param('word') word: string){
        return await this.service.findByWord(word.toLowerCase())
    }

    @Post()
    async PushVideo(@Body() dto: CreateVideoDto){
        return await this.service.PushVideo(dto)
    }
}