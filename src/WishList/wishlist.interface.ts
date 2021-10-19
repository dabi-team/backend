export interface Wishlist extends Document {
  userId: string;
  productId: string;
  product: Object;
}
