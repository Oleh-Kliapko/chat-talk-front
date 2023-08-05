import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks';

const PublicRoute = ({ redirectTo = '/', component: Component }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
