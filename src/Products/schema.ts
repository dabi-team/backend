import * as mongoose from 'mongoose';
import { Stream } from 'stream';

export const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  category: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  quantity: {
    type: Number,
  },
});
