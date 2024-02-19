import { ILoginSchema } from 'features/AuthByUsername';

import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;
  loginForm?: ILoginSchema;
}
