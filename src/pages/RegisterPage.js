import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function RegisterPage() {
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? `/`);
  return (
    <div>
      <Link to={goBackLink.current} state={{ from: location }}>
        Go Back
      </Link>
      <RegisterForm />
    </div>
  );
}
