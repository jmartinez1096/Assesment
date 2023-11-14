import React, {FC} from 'react';
import {Control, Controller} from 'react-hook-form';
import {InputProps} from '../../types';
import {Input} from './Input';

type TProps = InputProps & {
  name: string;
  control: Control<any, any>;
};

export const InputForm: FC<TProps> = props => {
  const {control, name, formattedField, mask, ...rest} = props;

  return (
    <Controller
      control={control}
      render={({field: {onChange, onBlur, value}}) => (
        <Input
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
      name={name}
    />
  );
};
