import { Schema, model, } from 'mongoose';
import { IUser, } from '../interfaces/User';

const userSchema = new Schema<IUser>({
  userId: { type: Number, required: true, },
  isAdmin: { type: Boolean, required: true, },
  isMailing: { type: Boolean, required: true, },
  firstName: { type: String, required: true, },
  username: { type: String, required: true, },
});

const User = model<IUser>('User', userSchema);

export default User;
