import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserState = (state: IStateSchema) => state.user;
