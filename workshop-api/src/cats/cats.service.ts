import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat, CatDocument } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catModel.create(createCatDto);
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find();
  }

  async findOne(id: string): Promise<Cat> {
    return this.catModel.findById(id);
  }

  async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat> {
    return this.catModel.findByIdAndUpdate(id, updateCatDto, { new: true });
  }

  remove(id: string) {
    return this.catModel.findByIdAndRemove(id);
  }
}
