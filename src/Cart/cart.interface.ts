export interface Cart extends Document {
  userId: string;
  productId: string;
  quantity: number;
  product: Object;
}
