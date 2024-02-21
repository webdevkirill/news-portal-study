import { getProfileData } from './model/services/getProfileData/getProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { IProfile, IProfileSchema } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { IProfile, IProfileSchema, profileActions, profileReducer, getProfileData, ProfileCard };
