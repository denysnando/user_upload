import React, { Fragment, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import AuthActions from '~/store/ducks/auth';

import Form, { FormHandles } from '~/components/Form';
import Input from '~/components/Input';

import { Buttons } from './styles';
import { Link } from 'react-router-dom';

const { signInRequest } = AuthActions;

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const SignIn: React.FC = () => {
  const dispatch = useDispatch();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    ({ email, password }) => {
      dispatch(signInRequest(email, password));
    },
    [dispatch]
  );

  return (
    <Fragment>
      <Form
        ref={formRef}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Input name="email" placeholder="E-Mail" />
        <Input name="password" placeholder="Password" type="password" />
        <Buttons>
          <button type="submit">Login</button>
          <Link to="/sign_up">Not member yet? Sign Up here!</Link>
        </Buttons>
      </Form>
    </Fragment>
  );
};

export default SignIn;
