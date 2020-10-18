import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';
import { User } from '~/@types';

/* Payloads */

export interface ISetPropAction extends AnyAction {
  email: string;
  password: string;
  token: string;
  user: User;
  exp: string;
}

/* Action Types */

export interface ITypes extends DefaultActionTypes {
  SIGN_IN_REQUEST: 'signInRequest';
  SIGN_IN_SUCCESS: 'signInSuccess';
  SIGN_IN_FAILURE: 'signInFailure';
  SIGN_OUT_REQUEST: 'signOutRequest';
  SIGN_OUT_SUCCESS: 'signOutSuccess';
  SIGN_OUT_FAILURE: 'signOutFailure';
}

/* Action Creators */

export interface ICreators extends DefaultActionCreators {
  signInRequest: (email: string, password: string) => ISetPropAction;
  signInSuccess: (token: string, user: User, exp: string) => ISetPropAction;
}

export type IActions = ISetPropAction | AnyAction;

/* Redux State */

export interface IState {
  signedIn: boolean;
  token?: string;
  exp?: string;
}
