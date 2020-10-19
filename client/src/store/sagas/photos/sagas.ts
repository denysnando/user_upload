import { takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth/creators';
import { PhotosTypes as Types } from '~/store/ducks/photos/creators';

import { createPhoto, getPhotos } from '.';

const sagas = [
  takeLatest(AuthTypes.SIGN_IN_SUCCESS, getPhotos),
  takeLatest(AuthTypes.SIGN_UP_SUCCESS, getPhotos),
  takeLatest(Types.UPLOAD_PHOTO_REQUEST, createPhoto),
];

export default sagas;
