import { Contains, IsOptional, Length } from 'class-validator'

export class CreateVideoDto{
    id?: number

    @Length(2, 25)
    name: string

    @Contains('https://')
    url: string

    @IsOptional()
    @Length(0, 50)
    description: string
}