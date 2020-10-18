import React, { Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import AuthActions from '~/store/ducks/auth';

import Form from '~/components/Form';
import Input from '~/components/Input';

import { Buttons } from './styles';

const { signInRequest } = AuthActions;

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    ({ email, password }) => {
      dispatch(signInRequest(email, password));
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
        <Input name="email" placeholder="E-Mail" />
        <Input name="password" placeholder="Password" />
        <Buttons>
          <button type="submit">Login</button>
        </Buttons>
      </Form>
    </Fragment>
  );
};

export default SignUp;
