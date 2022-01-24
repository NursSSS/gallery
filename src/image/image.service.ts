import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { IImage } from './Interface/image.interface'
import { PushImageDto } from './dto/push-image.dto'

@Injectable()
export class ImageService {
    private DB: IImage[]

    constructor() {
        this.DB = [
            {id: 1, name: 'ghoul', url: 'https://ghoul.anime/image', description: 'true fan of ghouls'} //ссылка импровизированная :)
        ]
    }

    async findAll(){
        return this.DB
    }

    async findImageByID(id: number){
        const image = this.DB.find((item: IImage) => item.id === +id)
        if(!image){
            throw new HttpException('Image is not found', HttpStatus.NOT_FOUND)
        }
        return image
    }

    async pushToDB(dto: PushImageDto): Promise<IImage>{
        const resultate = this.DB.find(image => image.url === dto.url)
        if(resultate){
            throw new ConflictException('Image already exist')
        }
        dto.id = this.DB.length +1
        this.DB.push(dto)
        return dto
    }

    async updateImage(id: number, dto: PushImageDto){
        const image = this.DB.find((item: IImage) => item.id === +id)
        if(!image){
            throw new HttpException('Image is not found', HttpStatus.NOT_FOUND)
        }
        const newUrl = this.DB.find(image => image.url === dto.url)
        if(newUrl){
            throw new ConflictException('Image already exist')
        }
        image.name = dto.name
        image.url = dto.url
        image.description = dto.description
        this.DB.find((item: IImage) => item.id === +id) == image
        return image
    }

    async deleteImage(id: number){
        const image = this.DB.find((item: IImage) => item.id === +id)
        if(!image){
            throw new HttpException('Image is not found', HttpStatus.NOT_FOUND)
        }
        const indexOfImage = this.DB.findIndex(item => item === image)
        const deleted = this.DB.splice(indexOfImage, 1)
        console.log(deleted)
        if(!deleted.length){
            throw new HttpException('Image is not deleted', HttpStatus.INTERNAL_SERVER_ERROR)
        }
        return 'Image deleted'
    }
}
