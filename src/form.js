import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './input';
import validators from './Validators';

const sumbit = (value) => {
    console.log('Value', value);
}

const validateForm = {
    firstName: validators.required('First Name is required..!'),
    lastName: [validators.required('Last Name is required..!'), validators.maxLength(10), validators.minLength(5)]
}

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={Input}
            disabled={false}
            allowedPattern="^[a-zA-Z]*$"
            validate={validateForm.firstName}
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={Input}
            placeholder="Last Name"
            validate={validateForm.lastName}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field
            name="employed"
            id="employed"
            component="input"
            type="checkbox"
          />
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name="notes" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit(sumbit)} disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
  )
}

// const validate = (values) => {
//     console.log('ashok',values);
//     const errors = {};
//     if(!values.firstName) {
//         errors.firstName = 'First Name required...';
//     }
//     if(!values.lastName) {
//         errors.lastName = 'Last Name required...';
//     } else if(values.lastName.length <=5) {
//         errors.lastName = 'Last Name lenght length should be above 5...';
//     }
//     return errors;
// }

export default reduxForm({
  form: 'simple', // a unique identifier for this form
//   validate
})(SimpleForm)