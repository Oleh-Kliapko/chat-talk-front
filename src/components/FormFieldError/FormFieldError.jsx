import { FiAlertCircle } from "../../images/reactIcons/index";
import { ErrorBox, ErrorText } from "./FormFieldError.styled";
import PropTypes from 'prop-types';
export const FormFieldError = ({ title }) => <ErrorBox><FiAlertCircle size={13} color="#FF0000" /><ErrorText>{title}</ErrorText></ErrorBox>
FormFieldError.propTypes = { title: PropTypes.string, };
