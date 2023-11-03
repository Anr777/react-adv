
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyCheckBox, MySelect, MyTextInput } from '../components';

// interface FormValues {
//   firstName: string;
//   lastName: string;
//   email: string;
// }

export const FormikAbstractation = () => {


  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: 'Anibal',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={( values ) => {
          console.log(values);
        }}

        validationSchema={
          Yup.object({
            firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos').required('Requerido'),
            email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
            terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
            jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida').required('Requerido')
      
          })
        }
      >
        {
          formik => (
            <Form>
              <MyTextInput label='First Name' name='firstName' placeholder='First Name' />
            

              <MyTextInput label='Last Name' name='lastName'
                placeholder='Last Name'
              />
              

              <MyTextInput label='Email' name='email' 
                placeholder='email'
              />

              <MySelect label='job Type' name='jobType'>
                <option value=''>Pick something</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='it-senior'>It senior</option>
                <option value='it-jr'>It Jr.</option>
              </MySelect>            
            
            <MyCheckBox label='Terms of Condition' name='terms' />

              <button type='submit'>submit</button>
        
      </Form>
          )
        }
        
      </Formik>

      
    </div>
  )
}
