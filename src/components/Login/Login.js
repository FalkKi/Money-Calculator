import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from 'react';


const Login = () => {
   const [userInfo, setUserInfo] = useState({});
   const validationSchema = Yup.object().shape({
      name: Yup.string().typeError('need to be a string').required('Required field'),
      surname: Yup.string().typeError('need to be a string').required('Required field'),
      password: Yup.string().typeError('need to be a string').required('Required field').min(2, "Must be longer than 2 characters")
         .max(5, "Must be shorter than 5 characters"),
      confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'password is not confirmed').required('Required field'),
      email: Yup.string().typeError('need to be a string'),
   })
   const validateEmailForm = (values) => {
      const errors = {};
      if (!values.email) {
         errors.email = 'Required field';
      } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
         errors.email = 'Invalid email address';
      }
      return errors;
   };
   console.log(userInfo)
   return (
      <div>
         <h1>Login</h1>
         <Formik
            initialValues={
               {
                  name: '',
                  surname: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
               }
            }
            validate={validateEmailForm}
            validateOnBlur
            onSubmit={(values) => { setUserInfo(values) }}
            validationSchema={validationSchema}
         >
            {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
               <div>
                  <div>
                     <label htmlFor={'name'}>name</label><br />
                     <input
                        name={'name'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        placeholder={'name'}
                     >
                     </input>
                  </div>
                  {touched.name && errors.name && <p>{errors.name}</p>}
                  <div>
                     <label htmlFor={'surname'}>surname</label><br />
                     <input
                        name={'surname'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.surname}
                        placeholder={'surname'}
                     >
                     </input>
                  </div>
                  {touched.surname && errors.surname && <p>{errors.surname}</p>}
                  <div>
                     <label htmlFor={'email'}>email</label><br />
                     <input
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder={'email'}
                     >
                     </input>
                  </div>
                  {touched.email && errors.email && <p>{errors.email}</p>}
                  <div>
                     <label htmlFor={'password'}>password</label><br />
                     <input
                        type={'password'}
                        name={'password'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder={'password'}
                     >
                     </input>
                  </div>
                  {touched.password && errors.password && <p>{errors.password}</p>}
                  <div>
                     <label htmlFor={'confirmPassword'}>password confirmation</label><br />
                     <input
                        type={'password'}
                        name={'confirmPassword'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        placeholder={'password confirmation'}
                     >
                     </input>
                  </div>
                  {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                  <div>
                     <button disabled={!isValid && !dirty} onClick={handleSubmit} type={'submit'}>Send</button>
                  </div>
               </div>
            )}
         </Formik>
      </div>
   )
};

export default Login;