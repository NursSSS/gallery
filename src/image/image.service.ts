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
        return this.DB.find(i => i.id === id)
    }

    pushToDB(item: IImage){
        return this.DB.push(item) //return, чтобы видеть, что я добавляю :) 
    }
}
