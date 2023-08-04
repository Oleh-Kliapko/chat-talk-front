import {  Wrapper,  Form,  Title,  Input,  Error,  InputWrapper,  ShowPasswordBtn,} from './ForgotPasswordLink.styled';
import { Formik } from 'formik';
import { AuthBtn} from '@/components/Buttons';
import { validations } from '@/utils/Schemas';
import { Lock } from '@/images/svg';
import { OffEyeIcon, OnEyeIcon } from '@/images/reactIcons';
import { useEffect, useState } from 'react';
import { confirmPassword } from '../../../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';


export const ForgotPasswordLink = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate()
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    setToken(token);
    console.log('token:', token);
  }, []);

    return (
         <Wrapper>
      <Formik
        validationSchema={validations.recoveryPasswordSchema}
        initialValues={{  password: '', confirmPassword: '' }}
                onSubmit={async(values, { setSubmitting }) => {
                    if (values.password !== values.confirmPassword) {
                        alert("passwords in the fields do not match")
                         setSubmitting(false);
                    }else{
                      const credentials = { new_password: values.password, token };
                      await confirmPassword(credentials);
                      navigate("/login")
                      setSubmitting(false);
                    }
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
          
            <Title>New Password</Title>
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
          
                <Title>New Password</Title>
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
            <AuthBtn from={"recovey-password"} />
          </Form>
        )}
      </Formik>
      </Wrapper>
    )
};
