import * as Yup from "yup";

 export const validationSchema = Yup.object().shape({
    Email: Yup.string().email('Correo no valido').required('Se requiere el correo electronico'),

    Contras: Yup.string().min(10, 'Debe contener mínimo 10 caracteres').required('Se requiere la contraseña'),
    //Password: Yup.string().max(10, 'Minimo 10').required('Password is required'),    

    ConfirmPassword: Yup.string().oneOf([Yup.ref('Contras'), null], ' Las contraseñas no coinciden')
  });