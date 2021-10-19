import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
});
