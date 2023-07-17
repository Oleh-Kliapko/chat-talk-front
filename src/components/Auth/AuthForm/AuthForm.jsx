import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  Wrapper,
  Form,
  Title,
  Input,
  Error,
  InputWrapper,
  ShowPasswordBtn,
} from './AuthForm.styled';
import { AuthBtn, RedirectBtn, ForgotPasswordBtn } from '@/components/Buttons';
import { validations } from '@/utils/Schemas';
import { Email, Lock } from '@/images/svg';
import { OffEyeIcon, OnEyeIcon } from '@/images/reactIcons';

export const AuthForm = ({ from }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Wrapper>
      <Formik
        validationSchema={validations.loginSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Title>Email</Title>
            <InputWrapper style={{ position: 'relative' }}>
              <Email />
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email address"
                id="email"
              />
            </InputWrapper>
            <Error className="error">
              {errors.email && touched.email && errors.email}
            </Error>
            <Title>Password</Title>
            <InputWrapper>
              <Lock />
              <Input
                type={isShowPassword ? 'text' : 'password'}
                name="password"
                secureTextEntry={!isShowPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
              />
              <ShowPasswordBtn
                type="button"
                onClick={() => setIsShowPassword(prev => !prev)}
              >
                {isShowPassword ? (
                  <OnEyeIcon size={18} />
                ) : (
                  <OffEyeIcon size={18} />
                )}
              </ShowPasswordBtn>
            </InputWrapper>
            <Error>
              {errors.password && touched.password && errors.password}
            </Error>
            <ForgotPasswordBtn from={from} />
            <AuthBtn from={from} />
          </Form>
        )}
      </Formik>
      <RedirectBtn from={from} />
    </Wrapper>
  );
};

AuthForm.propTypes = {
  from: PropTypes.string,
};
