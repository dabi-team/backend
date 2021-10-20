export interface User extends Document {
  userId: string;
  name: string;
  password: string;
  email: string;
  number: string;
  pinCode: string;
  state: string;
  city: string;
  address: string;
}
