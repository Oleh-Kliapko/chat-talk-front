import { Input, InputWrapper, MainContainer, MainText, SecondaryText, LabelWrapper, Error } from "./EnterEmailModal.styled";
import { Formik, Form, } from "formik";
import { Email } from '@/images/svg';
import { resetPassword } from "../../redux/auth/operations";
import { validations } from "../../utils/Schemas/validations";
import { AuthBtn } from "../Buttons/AuthBtn";
import PropTypes from 'prop-types';

export const EnterEmailModal = ({ onClose, onOpenRecieved }) => {
    return (
        <MainContainer>
            <MainText>Forgot password</MainText>
            <SecondaryText>Enter your email address, and we&apos;ll send you a link to reset your password</SecondaryText>
            <Formik
                validationSchema={validations.emailSchema}
                initialValues={{ email: '' }}
                onSubmit={async ({ email }, { setSubmitting }) => { await resetPassword({ email }); onClose(); onOpenRecieved(); setSubmitting(false); }} >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <LabelWrapper>Email</LabelWrapper>
                        <InputWrapper style={{ position: 'relative' }}>
                            <Email />
                            <Input type="text" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} placeholder="Email address" />
                        </InputWrapper>
                        <Error>{errors.email && touched.email && errors.email}</Error>
                        <AuthBtn from="emailModal" />
                    </Form>)}
            </Formik>
        </MainContainer>
    );
};

EnterEmailModal.propTypes = {
    onClose: PropTypes.func,
    onOpenRecieved: PropTypes.func,
};

