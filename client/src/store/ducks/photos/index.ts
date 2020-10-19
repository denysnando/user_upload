import { createReducer } from 'reduxsauce';

import { IState, IActions, ISetPropAction } from './types';
import Creators, { PhotosTypes as Types } from './creators';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  photos: [],
};

/* Reducers */

// export const reducer = (state: IState, { prop }: ISetPropAction): IState =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  // [Types.ACTION_TYPE]: reducer,
});
