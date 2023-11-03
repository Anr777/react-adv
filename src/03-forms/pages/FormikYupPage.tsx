
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikYupPage = () => {



  const formik = useFormik({
    initialValues: {
      firstName: 'Anibal',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
                  .max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
      lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
      email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),

    })
  });

  const { 
    handleSubmit, errors, touched, getFieldProps 
  } = formik;

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstName">First Name</label>
        <input type="text" 
          { ...getFieldProps('firstName') }
        />
        {
          touched.firstName && errors.firstName &&
          <span>{ errors.firstName }</span>
        }

        <label htmlFor="lastName">Last Name</label>
        <input type="text" 
          { ...getFieldProps('lastName') }
        />
        {
          touched.lastName && errors.lastName && <span>{ errors.lastName }</span>
        }

        
        <label htmlFor="email">Email Address</label>
        <input type="text" 
          { ...getFieldProps('email') }
        />
        {
          touched.email && errors.email && <span>{ errors.email }</span>
        }


        <button type='submit'>submit</button>
        
      </form>
    </div>
  )
}
