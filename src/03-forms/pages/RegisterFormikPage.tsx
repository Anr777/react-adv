import { MyTextInput } from '../components';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';


export const RegisterFormikPage = () => {

 
 
  
  // const { name, email, password1, password2 } = formData;


  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik initialValues={{
        name: '',
        email: '',
        password1: '',
        password2: '',
      }} onSubmit={ ( values ) => {
        console.log(values)
      }} validationSchema={
        Yup.object({
          name: Yup.string().required('Requerido mi estimado').min(2, 'Debe de tener minimo 2 caracteres' ).max(15, 'Solo se permiten 15 caracteres mi chamo'),
          email: Yup.string().required('Requerido').email('Ingrese un correo valido'),
          password1: Yup.string().required('Requerido mi chamo').min(6, 'Debe tener al menos 6 caracteres'),
          password2: Yup.string().required('Requerido mi chamo').oneOf([Yup.ref('password1')], 'Los password deben de coincidir mi chamo'),
        
        })
      } >
        {
          ({ handleReset }) => (

            //* PRIMERA FORMA
            // <Form>
            //   <label htmlFor="name">Name</label>
            //   <Field name='name' type='text' />
            //   <ErrorMessage name='name' component='span' />
              
            //   <label htmlFor="email">Email</label>
            //   <Field name='email' type='email' />
            //   <ErrorMessage name='email' component='span' />

            //   <label htmlFor="password1">Contraseña</label>
            //   <Field name='password1' type='password' />
            //   <ErrorMessage name='password1' component='span' />

            //   <label htmlFor="password2">Repetir contraseña</label>
            //   <Field name='password2' type='password' />
            //   <ErrorMessage name='password2' component='span' />

            //   <button type='submit'>submit</button>
            //   <button onClick={ handleReset } type='reset'>reset</button>
            // </Form>

            //* SEGUNDA FORMA
            <Form>
              <MyTextInput
                label='Ingresa tu Nombre'
                name='name'
                placeholder='Tu nombre'
              />
              
              <MyTextInput
                label='Email'
                name='email'
                type='email'
                placeholder='anibal@gmail.com'
              />
  
              <MyTextInput
                label='Ingresa tu contraseña'
                name='password1'
                type='password'
                placeholder='******'
              />
  
              <MyTextInput
                label='Ingresa tu contraseña'
                name='password2'
                type='password'
                placeholder='******'
              />
              <button type='submit'>Submit</button>
              <button type='button' onClick={ handleReset }>Reset</button>
            </Form> 

          )
        }

      </Formik>

      {/* <form noValidate onSubmit={ onSubmit }>
        <input type='text'
          name='name'
          placeholder='Name'
          value={ name }
          onChange={ onChange }
          className={`${ name.trim().length <= 0 && 'has-error'}`}
        />
        {
          name.trim().length <= 0 && <span>Este campo es necesario</span>
        }
        <input type='email'
          name='email'
          placeholder='Email'
          value={ email }
          onChange={ onChange }
          className={`${!isValidEmail( email ) && 'has-error'}`}
        />
        {
          !isValidEmail( email ) && <span>Email no es valido</span>
        }

        <input type='password'
          name='password1'
          placeholder='Password'
          value={ password1 }
          onChange={ onChange }
          className={`${password1.trim.length <= 0 && 'has-error'}`}
        />
        {
          password1.trim().length <= 0 &&<span>Este campo es necesario</span>
        }

        {
          password1.trim().length < 6 && password1.trim().length > 0 && <span>La contrasenia tiene que tener 6 letras</span>
        }

        <input type='password'
          name='password2'
          placeholder='Repeat Password'
          value={ password2 }
          onChange={ onChange }
          className={`${password2.trim.length <= 0 && 'has-error'}`}
        />
        {
          password2.trim().length <= 0  && <span>Este campo es necesario</span>
        }
        {
          password2.trim().length > 0 && password1.trim() !== password2.trim() && <span>Las contrasenias tienen que ser iguales.</span>
        }

        
        <button type='submit'>
          create
        </button>
        <button type='button' onClick={ resetForm }>
          resetForm
        </button>
      </form> */}
    </div>
  );
};
