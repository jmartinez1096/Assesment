import * as yup from 'yup';

const required = 'Campo requerido'
const maxMessage = (max: number) => `Debe ser máximo de ${max} caracteres`;
const minMessage = (min: number) => `Debe ser minimo de ${min} caracteres`;
export default () => {
  return yup.object().shape({
      id: yup
      .string()
      .required(required)
      .max(10, maxMessage(10))
      .min(3, minMessage(3)),
      name: yup
      .string()
      .required(required)
      .min(5, minMessage(5))
      .max(10, maxMessage(10)),
      description: yup
      .string()
      .required(required)
      .min(10, minMessage(10))
      .max(200, maxMessage(200)),
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
