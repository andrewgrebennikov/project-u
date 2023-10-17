export type { Profile, ProfileSchema } from './model/types/profileSchema';
export { profileActions, profileReducer } from './model/slices/profileSlice';
export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';
