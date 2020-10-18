import React, { InputHTMLAttributes } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  defaultValue?: any;
}

const Input: React.FC<Props> = ({ name, defaultValue, ...props }) => {
  const { control, errors } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      // error={errors[name] && true}
      defaultValue={defaultValue}
      as={<input {...props} />}
    />
  );
};

export default Input;
