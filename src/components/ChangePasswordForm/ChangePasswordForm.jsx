import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Error, Input, InputWrapper, ShowPasswordBtn, Title, Wrapper } from './ChangePasswordForm.styled';
import { Formik, Form } from 'formik';
import { validations } from '../../utils/Schemas/validations';
import { Lock } from '../../images/svg';
import { OffEyeIcon, OnEyeIcon } from '../../images/reactIcons';
import { AuthBtn } from '../Buttons/AuthBtn';
import { toast } from 'react-toastify';
import { changePassword } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

export const ChangePasswordForm = () => {
    const [isShowCurrentPassword, setIsShowCurrentPassword] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Wrapper>
            <Formik
                validationSchema={validations.changePasswordSchema}
                initialValues={{ current: '', new: '', confirm: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    const credentials = {
                        old_password: values.current,
                        password: values
                    }
                    dispatch(changePassword(credentials));
                    toast.success("password changed successfuly!")
                    navigate("/")
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
                        <Title>Current</Title>
                        <InputWrapper>
                            <Lock />
                            <Input
                                type={isShowCurrentPassword ? 'text' : 'password'}
                                name="current"
                                secureTextEntry={!isShowCurrentPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.current}
                                placeholder="Enter your current password"
                            />
                            <ShowPasswordBtn
                                type="button"
                                onClick={() => setIsShowCurrentPassword(prev => !prev)}
                            >
                                {isShowCurrentPassword ? (
                                    <OnEyeIcon size={18} />
                                ) : (
                                    <OffEyeIcon size={18} />
                                )}
                            </ShowPasswordBtn>
                        </InputWrapper>
                        <Error>
                            {errors.current && touched.current && errors.current}
                        </Error>
                        <Title>New</Title>
                        <InputWrapper>
                            <Lock />
                            <Input
                                type={isShowPassword ? 'text' : 'password'}
                                name="new"
                                secureTextEntry={!isShowPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.new}
                                placeholder="Enter your new password"
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
                            {errors.new && touched.new && errors.new}
                        </Error>
                        <Title>Confirm</Title>
                        <InputWrapper>
                            <Lock />
                            <Input
                                type={isShowConfirmPassword ? 'text' : 'password'}
                                name="confirm"
                                secureTextEntry={!isShowConfirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirm}
                                placeholder="Confirm your new password"
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
                            {errors.confirm &&
                                touched.confirm &&
                                errors.confirm}
                        </Error>
                        <AuthBtn from={"change-password"} />
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};