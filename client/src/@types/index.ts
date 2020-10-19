import { IState as AuthState } from '~/store/ducks/auth/types';
import { ToastrState } from 'react-redux-toastr';

export interface ApplicationState {
  auth: AuthState;
  toastr: ToastrState;
}

export interface User {
  name: string;
  email: string;
}

export interface Photo {
  id: number;
  image_url: string;
  image_name: string;
}
