import { IsInt } from 'class-validator';

export class CreateSingleBookRequestDto {
    @IsInt()
    public readonly bookId: string;
}
