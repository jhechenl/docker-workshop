import { IsNumber, IsDefined } from 'class-validator';

export class CreateCatDto {
  @IsDefined()
  name: string;

  @IsDefined()
  @IsNumber()
  age: number;

  @IsDefined()
  breed: string;
}
