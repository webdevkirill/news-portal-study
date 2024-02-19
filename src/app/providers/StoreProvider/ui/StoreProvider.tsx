import { DeepPartial } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { IStateSchema, createReduxStore } from '..';

interface IStoreProviderProps {
  initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider: React.FC<IStoreProviderProps> = props => {
  const store = createReduxStore(props.initialState as IStateSchema);

  return <Provider store={store}>{props.children}</Provider>;
};
