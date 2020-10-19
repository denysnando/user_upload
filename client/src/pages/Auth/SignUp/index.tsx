import React, { Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import AuthActions from '~/store/ducks/auth';

import Form from '~/components/Form';
import Input from '~/components/Input';

import { Buttons } from './styles';
import { Link } from 'react-router-dom';

const { signUpRequest } = AuthActions;

const initialValues = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  password_confirmation: Yup.string()
    .oneOf(
      [Yup.ref('password'), undefined],
      'Password confirmation must match.'
    )
    .required(),
});

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    ({ name, email, password, password_confirmation }) => {
      dispatch(signUpRequest(name, email, password, password_confirmation));
    },
    [dispatch]
  );

  return (
    <Fragment>
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Input name="name" placeholder="Name" />
        <Input name="email" placeholder="E-Mail" />
        <Input name="password" placeholder="Password" type="password" />
        <Input
          name="password_confirmation"
          placeholder="Password Confirmation"
          type="password"
        />
        <Buttons>
          <button type="submit">Login</button>
          <Link to="/sign_in">Already a member? Login!</Link>
        </Buttons>
      </Form>
    </Fragment>
  );
};

export default SignUp;
