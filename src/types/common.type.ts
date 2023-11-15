import {ReactNode} from 'react';
import {TextInputProps} from 'react-native';

export type InputProps = TextInputProps & {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: string;
  label: string;
  disabled?: boolean;
  onChange?: (text: string) => void;
  borderColor?: string;
  formattedField?: boolean;
  mask?: any; //eslint-disable-line
};

export type ErrorMessage = {
  message?: string;
};

export type TProducts = {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
};

export type TProductsView = {
  id: string;
  name: string;
};

export type GenericResponse = {
  message: string;
};
