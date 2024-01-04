
import { Controller, Post, Body } from '@nestjs/common';
import { Item } from './todo.schema';
import { TodoService } from './todo.service';
import { Param } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) { }


    @Get()
    getAllItems() {
        // Call the todoService getAllItems function
        return this.todoService.getAllItems();
    }

    @Get('getItem/:id')
    getItem(@Param('id') id: string) {
        // Call the todoService getItem function
        return this.todoService.getItem(id);
    }

    @Post('addItem')
    addItem(@Body() item: Item) {


        if(!item.name) return "No name"

        // Put the data in the item object
        const newItem: Item = {
            name: item.name,
            datum: item.datum,
        };


        // Call the todoService addItem function
        this.todoService.addItem(newItem);

        return {"response" : "Item added"}
    }


    @Post('deleteItem/:id')
    deleteItem(@Param('id') id: string) {
        // Call the todoService deleteItem function
        this.todoService.deleteItem(id);
        return {"response" : "Item deleted"}
    }

}
