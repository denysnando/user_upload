import { IState as AuthState } from '~/store/ducks/auth/types';
import { IState as PhotosState } from '~/store/ducks/photos/types';
import { IState as UserState } from '~/store/ducks/user/types';
import { ToastrState } from 'react-redux-toastr';

export interface ApplicationState {
  auth: AuthState;
  photos: PhotosState;
  toastr: ToastrState;
  user: UserState;
}

export interface User {
  name: string;
  email: string;
}

export interface ThumbImageProp {
  url: string;
}

export interface ImageProp {
  thumb: ThumbImageProp;
  url: string;
}

export interface Photo {
  id: number;
  image: ImageProp;
  user_id: number;
}

export interface PhotoAttributes {
  user_id?: number;
  image: object;
}
