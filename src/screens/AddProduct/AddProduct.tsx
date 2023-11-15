import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Text} from 'react-native';
import {
  Button,
  Container,
  DatePickerForm,
  Header,
  InputForm,
  InputPreview,
} from '../../components';
import {TitleWrapper, ViewProductDetail, Wrapper, ViewButtons} from './Styles';
import {yupResolver} from '@hookform/resolvers/yup';
import schema from './schema';
import dayjs from 'dayjs';
import {useProducts} from '../../hooks';
import {useNavigation} from '@react-navigation/native';

type FormValues = {
  id: string;
  name: string;
  description: string;
  logo: string;
  dateInit: Date;
  dateEnd: Date;
};

export const AddProduct = ({route, props}) => {
  const {productObject, edit} = route.params;
  const {succesCreate, isLoading, addProduct} = useProducts();
  const navigation = useNavigation();

  const {
    control,
    formState: {errors},
    handleSubmit,
    getValues,
    setValue,
    reset,
  } = useForm<FormValues>({
    mode: 'onTouched',
    resolver: yupResolver(schema()),
    defaultValues: {
      id: edit ? productObject?.id : undefined,
      name: edit ? productObject?.name : undefined,
      description: edit ? productObject?.description : undefined,
      logo: edit ? productObject?.logo : undefined,
      dateInit: edit ? new Date(productObject?.date_release) : undefined,
      dateEnd: edit ? new Date(productObject?.date_revision) : undefined,
    },
  });

  const onSubmit = (data: FormValues) => {
    addProduct(
      {
        date_release: dayjs(new Date(data.dateInit)).format(
          'YYYY-MM-DDTHH:mm:ssZ',
        ),
        date_revision: dayjs(new Date(data.dateEnd)).format(
          'YYYY-MM-DDTHH:mm:ssZ',
        ),
        description: data.description,
        id: data.id,
        logo: data.logo,
        name: data.name,
      },
      edit,
    );
  };
  useEffect(() => {
    if (succesCreate) {
      navigation.goBack();
    }
  }, [succesCreate, isLoading]);

  const changueDateEnd = async (date: Date) => {
    await setValue('dateInit', new Date(date));
    const result = dayjs(date).add(1, 'year').toDate();
    setValue('dateEnd', result);
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
          {edit ? (
            <InputPreview
              label="Fecha de revisión"
              value={getValues('id')}
              disabled={true}
            />
          ) : (
            <InputForm
              control={control}
              label={'ID'}
              name="id"
              errorMessage={errors?.id?.message?.toString()}
            />
          )}

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
            onConfirm={date => changueDateEnd(date)}
          />

          <InputPreview
            label="Fecha de revisión"
            value={
              edit
                ? dayjs(getValues('dateEnd')).format('DD/MM/YYYY')
                : getValues('dateEnd')
                ? dayjs(getValues('dateEnd')).format('DD/MM/YYYY')
                : ''
            }
            disabled={true}
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
            onPress={() =>
              reset(formValues => ({
                ...formValues,
                id: edit ? productObject?.id : undefined,
                name: edit ? productObject?.name : undefined,
                description: edit ? productObject?.description : undefined,
                logo: edit ? productObject?.logo : undefined,
                dateInit: edit
                  ? new Date(productObject?.date_release)
                  : undefined,
                dateEnd: edit
                  ? new Date(productObject?.date_revision)
                  : undefined,
              }))
            }
          />
        </ViewButtons>
      </Wrapper>
    </Container>
  );
};
