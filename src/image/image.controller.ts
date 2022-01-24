import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ImageService } from './image.service';
import { PushImageDto } from './dto/push-image.dto'

@Controller('image')
export class ImageController {
    constructor(private readonly service: ImageService){}

    @Get()
    async findAll(){
        return await this.service.findAll()
    }

    @Get(':id')
    async findImageByID(@Param('id') id: number){
        return await this.service.findImageByID(id)
    }

    @Post()
    async pushToDB(@Body() item: PushImageDto){
        return await this.service.pushToDB(item)
    }

    @Put(':id')
    async updateImage(@Param('id') id: number, @Body() dto: PushImageDto){
        return await this.service.updateImage(id, dto)
    }

    @Delete(':id')
    async deleteImage(@Param('id') id: number){
        return await this.service.deleteImage(id)
    }
}
