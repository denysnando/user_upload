import React, { useRef, FormHTMLAttributes } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export interface FormHandles extends FormHTMLAttributes<HTMLFormElement> {
  handleResetForm: (values: any) => void;
}

interface Props {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
}

const Form: React.FC<Props> = ({
  initialValues,
  onSubmit,
  children,
  validationSchema,
}) => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleOnSubmit = (values: any) => {
    onSubmit(values);
  };

  return (
    <FormProvider {...methods}>
      <form ref={formRef} onSubmit={methods.handleSubmit(handleOnSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
