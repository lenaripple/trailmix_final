import mongoose, {Schema} from 'mongoose';
import validator from 'validator';
import { passwordReg } from './user.validation';
import constants from '../../config/constants';

const UserSchema = new Schema(
  {
  email: {
    type:String,
    unique: true,
    required: [true, 'Please enter a valid email!'],
    trim: true,
    validate: {
      validator(email){
        return validator.isEmail(email);
      },
      message: '{VALUE} is not a valid email',
    }
  },
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
    minlength: [6, 'Password must be at least six characters'],
    validate: {
      validator(password){
        return passwordReg.test(password);
      },
      message: '{VALUE} is not a valid password'
    }
  }
});
export default mongoose.model('User', UserSchema);
