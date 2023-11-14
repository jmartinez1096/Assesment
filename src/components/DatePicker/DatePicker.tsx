import dayjs from 'dayjs';
import React, {FC, useState} from 'react';
import {Text} from 'react-native';
import RNDatePicker, {DatePickerProps} from 'react-native-date-picker';

import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'styled-components';
import {Row} from '../Grid';
import {DateContainer, Label} from './Styles';

type Props = DatePickerProps & {
  onChange: (value: any) => void;
  onChangeDayIndex?: (index: number) => void;
  onBlur: () => void;
  label?: string;
  errorMessage?: string;
};

export const DatePicker: FC<Props> = props => {
  const {date, label, onChange, onChangeDayIndex, mode, errorMessage, ...rest} =
    props;
  const [open, setOpen] = useState(false);
  const [dateInserted, setDateInserted] = useState(false);
  let dateFormated;

  let title = 'Seleccionar Fecha';
  dateFormated = dayjs(date).format('DD/MM/YYYY');

  return (
    <>
      <DateContainer onPress={() => setOpen(!open)}>
        <Label isFocused={!!date}>{label}</Label>
        <Row alignContent="space-between" alignItems="center">
          <Text style={{color: dateInserted ? '#000' : '#a7a7a7'}}>
            {dateFormated}
          </Text>
        </Row>
        <RNDatePicker
          modal
          title={title}
          open={open}
          date={date}
          minuteInterval={15}
          mode={mode}
          locale="es"
          onConfirm={value => {
            setOpen(false);
            setDateInserted(true);
            onChange(value);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          {...rest}
        />
      </DateContainer>
      {errorMessage && (
        <>
          <Text
            style={{
              fontSize: 8,
              color: '#E61d1d',
              textAlign: 'left',
              width: '100%',
            }}>
            {errorMessage}
          </Text>
        </>
      )}
    </>
  );
};

DatePicker.defaultProps = {
  date: new Date(),
  confirmText: 'Confirmar',
  cancelText: 'Cancelar',
};
