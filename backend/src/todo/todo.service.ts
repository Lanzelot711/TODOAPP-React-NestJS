import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument, ItemSchema} from './todo.schema';
@Injectable()
export class TodoService {
    constructor(@InjectModel(ItemDocument.name) private readonly todoModel: Model<ItemDocument>) { }

    async addItem(item: Item): Promise<ItemDocument> {
        const newItem = new this.todoModel(item);
        return await newItem.save();
    }


    async getAllItems(): Promise<ItemDocument[]> {
        return await this.todoModel.find().exec();
    }

    async getItem(id: string): Promise<Item> {
        return await this.todoModel.findById(id);
    }

    async deleteItem(id: string): Promise<string> {
        await this.todoModel.findByIdAndDelete(id);

        return "Deleted ID: " + id;
    }
}

