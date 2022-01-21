import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImageService } from './image.service';
import { IImage } from './Interface/image.interface'

@Controller('image')
export class ImageController {
    constructor(private readonly service: ImageService){}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }

    @Get(':id')
    findImageByID(id: number){
        return this.service.findImageByID(id)
    }

    @Post()
    pushToDB(@Body() item:IImage){
        return this.service.pushToDB(item)
    }
}
