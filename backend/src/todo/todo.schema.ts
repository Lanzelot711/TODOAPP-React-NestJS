export interface Item {
    name: string;
    datum: string;
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ItemDocument extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  datum: string;
}

export const ItemSchema = SchemaFactory.createForClass(ItemDocument);
