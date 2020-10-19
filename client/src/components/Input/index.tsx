import React, { InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ValidationError } from 'yup';

import { Container, ErrorMessage } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  defaultValue?: any;
}

interface InputProps {
  error?: ValidationError;
}

const InputComponent: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <Container>
      <input {...props} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
};

const Input: React.FC<Props> = ({ name, defaultValue, ...props }) => {
  const { control, errors } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      // error={errors[name] && true}
      defaultValue={defaultValue}
      as={<InputComponent error={errors[name]} {...props} />}
    />
  );
};

export default Input;
