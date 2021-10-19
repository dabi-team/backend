import * as mongoose from 'mongoose';

export const WishlistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
});
