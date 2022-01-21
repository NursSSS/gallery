import { Injectable } from '@nestjs/common';
import { IImage } from './Interface/image.interface'

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

    findImageByID(id: number){
        return this.DB.find(item => item.id === +id)
    }

    pushToDB(item: IImage){
        this.DB.push(item)
    }
}
