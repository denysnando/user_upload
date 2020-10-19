import React, { Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import Form from '~/components/Form';
import Input from '~/components/Input';

import {
  UploaderContainer,
  Separator,
  ImagesContainer,
  Image,
  Wrapper,
} from './styles';

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    ({ email, password }) => {
      // dispatch(signInRequest(email, password));
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
        <UploaderContainer>
          <Input type="file" name="dasdas" />
          <button>Upload!</button>
        </UploaderContainer>
        <Separator />
        <Wrapper>
          <ImagesContainer>
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
            <Image />
          </ImagesContainer>
        </Wrapper>
      </Form>
    </Fragment>
  );
};

export default Home;
