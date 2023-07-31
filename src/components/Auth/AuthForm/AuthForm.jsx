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
import {logIn,signUp} from "../../../redux/auth/operations"
import { useDispatch } from 'react-redux';
export const AuthForm = ({ from }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const isLoginPage = from === 'loginPage';
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Formik
        validationSchema={
          isLoginPage ? validations.loginSchema : validations.signUpSchema
        }
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        onSubmit={(values, { setSubmitting }) => {
          isLoginPage ? dispatch(logIn({ email: values.email, password: values.password })) : dispatch(signUp({ email: values.email, password: values.password }));
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
                placeholder="Email address"
                id="email"
              />
            </InputWrapper>
            <Error>{errors.email && touched.email && errors.email}</Error>
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
                placeholder="Password"
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
            {!isLoginPage && (
              <>
                <Title>Confirm Password</Title>
                <InputWrapper>
                  <Lock />
                  <Input
                    type={isShowConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    secureTextEntry={!isShowConfirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    placeholder="Enter password again"
                  />
                  <ShowPasswordBtn
                    type="button"
                    onClick={() => setIsShowConfirmPassword(prev => !prev)}
                  >
                    {isShowConfirmPassword ? (
                      <OnEyeIcon size={18} />
                    ) : (
                      <OffEyeIcon size={18} />
                    )}
                  </ShowPasswordBtn>
                </InputWrapper>
                <Error>
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </Error>
              </>
            )}
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
