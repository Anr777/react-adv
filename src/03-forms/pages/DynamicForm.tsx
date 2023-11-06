
import { Formik, Form } from 'formik';

import formJson from '../data/custom-form.json';
import { MySelect, MyTextInput } from '../components';

import * as Yup from 'yup'



const initialValues : { [key: string] : any } = {};
const requiredFields: { [key: string] : any } = {};

for ( const input of formJson ) {
  initialValues[ input.name ] = input.value;
  if ( !input.validations ) continue;

  let schema = Yup.string();

  for ( const rule of input.validations ) {
    if ( rule.type === 'required' ){
      schema = schema.required('Este campo es requerido');
    }

    // Otras reglas

    if ( rule.type === 'minLength') {
      schema = schema.min(( rule as any ).value || 5 , `Minimo ${ (rule as any ).value || 5 } caracteres`)
    }

    if ( rule.type === 'email' ) {
      schema = schema.email('Ingrese un correo valido')
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        initialValues={ initialValues }
        onSubmit={( values ) => {
          console.log(values);
        }}
        validationSchema={ validationSchema }
      >
        {
          ( formik ) => (
            <Form noValidate>
              {
                formJson.map( ({ type, name, placeholder, label, options }) => {

                  if ( type === 'select') return (
                    <MySelect key={ name }
                      name = { name }
                      label = { label }
                    >
                      <option value='' disabled>Select an option</option>
                      {
                        options?.map( ({ id, label }) => (
                          <option key={ id } value={ id } >{ label }</option>
                        ))
                      }
                    </MySelect>
                  )

                  return (
                    <MyTextInput key={ name } type={ ( type as any ) } name={ name } label={ label }
                      placeholder={ placeholder }
                    />
                  )
                })
              }

              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
