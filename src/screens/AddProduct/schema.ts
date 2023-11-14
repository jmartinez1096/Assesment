import * as yup from 'yup';

const required = 'Campo requerido'
const max =  'El campo debe ser máximo de {{ max }} caracteres';
const min =  'El campo debe ser minimo de {{ max }} caracteres';
export default () => {
  return yup.object().shape({
      id: yup
      .string()
      .required(required)
      .max(10, max)
      .min(3, min),
      name: yup
      .string()
      .required(required)
      .min(5, min)
      .max(10, max),
      description: yup
      .string()
      .required(required)
      .min(10, min)
      .max(200, max),
      logo: yup
      .string()
      .required(required),
      dateInit: yup
      .string()
      .required(required),
      dateEnd: yup
      .string()
      .required(required),
  });
};
