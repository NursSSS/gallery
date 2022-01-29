import { Contains, IsOptional, Length } from 'class-validator'

export interface IVideo {
    id?: number

    @Length(2, 10)
    name: string;

    @Contains('https://')
    url: string

    @IsOptional()
    @Length(0, 50)
    descripton: string
}
