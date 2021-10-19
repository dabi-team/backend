export interface BuyNow extends Document {
  userId: string;
  productId: string;
  quantity: string;
  product: Object;
}
