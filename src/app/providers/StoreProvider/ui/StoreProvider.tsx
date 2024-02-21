import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IStateSchema, createReduxStore } from '..';

interface IStoreProviderProps {
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider: React.FC<IStoreProviderProps> = props => {
  const navigate = useNavigate();

  const store = createReduxStore(
    props.initialState as IStateSchema,
    props.asyncReducers as ReducersMapObject<IStateSchema>,
    navigate,
  );

  return <Provider store={store}>{props.children}</Provider>;
};
