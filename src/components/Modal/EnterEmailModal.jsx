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


// import { BtnTemplate } from "../Buttons/BtnTemplate";
// import { Input, InputWrapper, MainContainer, MainText, SecondaryText, LabelWrapper } from "./EnterEmailModal.styled";
// import { Email } from '@/images/svg';
// import { themes } from "../../styles/themes";
// import { resetPassword } from "../../redux/auth/operations";
// import { useCallback, useState } from "react";
// import PropTypes from 'prop-types';
// import { toast } from "react-toastify";

// export const EnterEmailModal = ({ onClose, onOpenRecieved }) => {
//     const [value, setValue] = useState('');
//     const sendEmail = useCallback(async (e) => {
//         e.preventDefault();
//         if (value.trim() === "") return toast.warn("fill email field");
//         if (value.includes("@mail.ru") || value.includes("@rambler.ru") || value.includes("@mailinator.ru")) return toast.warn('Invalid email domain');
//         try {
//             await resetPassword({ email: value });
//             onClose();
//             onOpenRecieved();
//         } catch (error) {
//             console.log(error);
//         }
//     },[onClose, onOpenRecieved, value]);

//     return (
//         <MainContainer>
//             <form onSubmit={sendEmail}>
//                 <MainText>Forgot password</MainText>
//                 <SecondaryText>Enter your email address, and we'll send you a link to reset your password</SecondaryText>
//                 <LabelWrapper><label htmlFor="email">Email</label></LabelWrapper>
//                 <InputWrapper>
//                     <Input type="email" id="email" pattern="/^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/" title='must be valid email' required onChange={(e) => { setValue(e.target.value) }} value={value} placeholder="Email address" />
//                     <Email />
//                 </InputWrapper>
//                 <BtnTemplate
//                     text="Continue"
//                     textSize={themes.fontSizes.m}
//                     color={themes.colors.white}
//                     width="100%"
//                     height={`${themes.spacing[12]}px`}
//                     gradient={themes.colors.mainBtnBgr}
//                     hoverGradient={themes.colors.accentBtnBgr}
//                     border={themes.border.main}
//                     borderRadius={themes.radii.main}
//                     marginTop={`84px`}
//                     type="submit"
//                 />
//             </form>
//         </MainContainer>
//     );
// }

// EnterEmailModal.propTypes = {
//     onClose: PropTypes.func,
//     onOpenRecieved: PropTypes.func,
// };