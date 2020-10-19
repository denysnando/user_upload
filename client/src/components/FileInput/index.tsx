import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
}

const FileInput: React.FC<Props> = ({ name, ...props }) => {
  const { register } = useFormContext();
  return <input ref={register} name={name} type="file" {...props} />;
};

export default FileInput;
