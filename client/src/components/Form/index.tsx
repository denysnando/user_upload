import React, { forwardRef, useImperativeHandle } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export interface FormHandles {
  handleResetForm: (values: any) => void;
}

interface Props {
  initialValues: any;
  onSubmit: (values: any) => void;
  validationSchema: any;
  children: React.ReactNode;
}

const Form: React.ForwardRefRenderFunction<FormHandles, Props> = (
  props,
  ref
) => {
  const methods = useForm({
    defaultValues: props.initialValues,
    resolver: yupResolver(props.validationSchema),
  });

  const handleResetForm = (values: any) => {
    methods.reset(values);
  };

  useImperativeHandle(ref, () => {
    return {
      handleResetForm,
    };
  });

  const handleOnSubmit = (values: any) => {
    props.onSubmit(values);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleOnSubmit)}>
        {props.children}
      </form>
    </FormProvider>
  );
};

export default forwardRef(Form);
