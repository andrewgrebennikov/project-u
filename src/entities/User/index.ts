import { userReducer, userActions } from './model/slices/userSlice';
import type { UserSchema, User } from './model/types/userSchema';
import { getAuthData } from './model/selectors/getAuthData/getAuthData';

export { userReducer, userActions, UserSchema, User, getAuthData };
