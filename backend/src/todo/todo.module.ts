import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './todo.schema';
import { ItemDocument } from './todo.schema';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: ItemDocument.name, schema: ItemSchema }]),
    ],
    controllers: [TodoController],
    providers: [TodoService],
    exports: [TodoService, TodoModule]
})
export class TodoModule {}
