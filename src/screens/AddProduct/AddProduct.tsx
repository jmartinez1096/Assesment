import React from 'react';
import {useForm} from 'react-hook-form';
import {Text} from 'react-native';
import {
  Button,
  Container,
  DatePickerForm,
  Header,
  InputForm,
} from '../../components';
import {TitleWrapper, ViewProductDetail, Wrapper, ViewButtons} from './Styles';
import {yupResolver} from '@hookform/resolvers/yup';
import schema from './schema';

type FormValues = {
  id: string;
  name: string;
  description: string;
  logo: string;
  dateInit: string;
  dateEnd: string;
};

export const AddProduct = () => {
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: yupResolver(schema()),
  });

  const onSubmit = (data: FormValues) => {
    console.log('email: ', data.name);
  };
  return (
    <Container>
      <Header renderBack={true} />
      <Wrapper>
        <TitleWrapper>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: '#000',
            }}>{`Formulario de Registro`}</Text>
        </TitleWrapper>
        <ViewProductDetail>
          <InputForm
            control={control}
            label={'ID'}
            name="id"
            errorMessage={errors?.id?.message?.toString()}
          />
          <InputForm
            control={control}
            label={'Nombre'}
            name="name"
            errorMessage={errors?.name?.message?.toString()}
          />

          <InputForm
            control={control}
            label={'Descripción'}
            name="description"
            errorMessage={errors?.description?.message?.toString()}
          />

          <InputForm
            control={control}
            label={'Logo'}
            name="logo"
            errorMessage={errors?.logo?.message?.toString()}
          />

          <DatePickerForm
            mode="date"
            name="dateInit"
            control={control}
            label={'Fecha Liberación'}
            errorMessage={errors?.dateInit?.message?.toString()}
            theme={'light'}
            minimumDate={new Date()}
            is24hourSource={'locale'}
          />
        </ViewProductDetail>
        <ViewButtons>
          <Button
            primaryText={'Enviar'}
            textColor={'#293e6d'}
            marginTop={24}
            onPress={handleSubmit(onSubmit)}
          />

          <Button
            primaryText={'Reiniciar'}
            textColor={'#293e6d'}
            background={'#fff'}
            marginTop={24}
            onPress={() => console.log('agregar')}
          />
        </ViewButtons>
      </Wrapper>
    </Container>
  );
};
