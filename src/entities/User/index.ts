import { userReducer, userActions } from './model/slices/userSlice';
import { getAuthData } from './model/selectors/getAuthData/getAuthData';

export { userReducer, userActions, getAuthData };
export type { UserSchema, User } from './model/types/userSchema';
