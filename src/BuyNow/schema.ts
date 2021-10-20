import * as mongoose from 'mongoose';

export const BuyNowSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
  time: { type: Date, default: Date.now },
});
