import { call, put, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { toastr } from 'react-redux-toastr';
import { serialize } from 'object-to-formdata';

import { ISetPropAction } from '~/store/ducks/auth/types';
import PhotosActions from '~/store/ducks/photos';

import api from '~/services/api';
import { ApplicationState } from '~/@types';

export function* getPhotos(): SagaIterator {
  const { getPhotosSuccess } = PhotosActions;

  try {
    const { id } = yield select((state: ApplicationState) => state.user);

    const res = yield call(api.get, `/users/${id}`);

    const { user_images } = res.data;

    yield put(getPhotosSuccess(user_images));
  } catch (err) {
    if (err.response.status === 401) {
      toastr.error('Error', 'Some error ocurred. Please check logs.');
    } else {
      toastr.error('Error', 'Connection failed.');
    }
    console.log(err.response);
  }
}

export function* createPhoto({ attributes }: ISetPropAction): SagaIterator {
  const { uploadPhotoSuccess } = PhotosActions;
  const attrs = serialize(attributes);

  try {
    const res = yield call(api.post, 'user_images', attrs);

    yield put(uploadPhotoSuccess(res.data));
  } catch (err) {
    toastr.error('Error', 'Some error ocurred. Please check logs.');
    console.log(err);
  }
}
