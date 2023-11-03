import { useForm } from '../hooks/useForm';
import '../styles/styles.css';


export const RegisterPage = () => {

 
  const { formData, onChange, onSubmit, resetForm, isValidEmail, name, email, password1, password2  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });
  
  // const { name, email, password1, password2 } = formData;


  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate onSubmit={ onSubmit }>
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
      </form>
    </div>
  );
};
