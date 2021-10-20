import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
