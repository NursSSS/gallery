import { Controller, Get, Param} from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
    constructor(private readonly service: VideoService){}

    @Get(':word')
    async findByWord(@Param('word') word: string){
        return await this.service.findByWord(word.toLowerCase())
    }
}
