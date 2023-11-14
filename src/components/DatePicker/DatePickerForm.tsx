import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';
import { DatePickerProps } from 'react-native-date-picker';
import { DatePicker } from './DatePicker';

type TProps = Omit<DatePickerProps, 'date'> & {
  name: string;
  label?: string | null;
  errorMessage?: string;
  control: Control<any, any>; //eslint-disable-line
  onChangeDayIndex?: (index: number) => void;
};

export const DatePickerForm: FC<TProps> = (props) => {
  const {
    control,
    name,
    onChangeDayIndex,
    ...rest
  } = props;

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <DatePicker
          onBlur={onBlur}
          onChange={onChange}
          onChangeDayIndex={onChangeDayIndex}
          {...rest}
          date={value}
        />
      )}
      name={name}
    />
  );
};
