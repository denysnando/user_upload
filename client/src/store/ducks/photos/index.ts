import { createReducer } from 'reduxsauce';

import { AuthTypes } from '~/store/ducks/auth/creators';
import { IState, IActions, ISetPropAction } from './types';
import Creators, { PhotosTypes as Types } from './creators';

export default Creators;

/* Initial State */

export const INITIAL_STATE: IState = {
  photos: [],
};

/* Reducers */

export const handleGetPhotosSuccess = (
  state: IState,
  { photos }: ISetPropAction
): IState => ({ ...state, photos });

export const handleAddPhoto = (
  state: IState,
  { photo }: ISetPropAction
): IState => ({ ...state, photos: [photo, ...state.photos] });

export const handleResetPhotos = (state: IState): IState => ({
  ...state,
  ...INITIAL_STATE,
});

/* Reducers to types */

export const reducer = createReducer<IState, IActions>(INITIAL_STATE, {
  [Types.GET_PHOTOS_SUCCESS]: handleGetPhotosSuccess,
  [Types.UPLOAD_PHOTO_SUCCESS]: handleAddPhoto,
  [AuthTypes.SIGN_OUT_REQUEST]: handleResetPhotos,
});
