import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

import { Photo, PhotoAttributes } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  photos: Photo[];
  attributes: PhotoAttributes;
  photo: Photo;
}
/* Action Types */

export interface ITypes extends DefaultActionTypes {
  GET_PHOTOS_SUCCESS: 'getPhotosSuccess';
  UPLOAD_PHOTO_REQUEST: 'uploadPhotoRequest';
  UPLOAD_PHOTO_SUCCESS: 'uploadPhotoSuccess';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  getPhotosSuccess: (photos: Photo[]) => ISetPropAction;
  uploadPhotoRequest: (attributes: PhotoAttributes) => ISetPropAction;
  uploadPhotoSuccess: (photo: Photo) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  photos: Photo[];
}
