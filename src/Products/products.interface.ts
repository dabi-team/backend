import { Document } from 'mongoose';

export interface Product extends Document {
  title: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  images: string[];
  quantity: number;
}

// title: "string",
// descripton: "string",
// price: "number",
// discount: "number",
// category: "string",
// images: "string",
// quantity: "number",
// "title": "string",
// "descripton": "string",
// "price": 123,
// "discount": "number",
// "category": "string",
// "images": ["string","1332"],
// "quantity": 2
