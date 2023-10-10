import LogInForm from 'components/LogInForm/LogInForm';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function LogInPage() {
  const location = useLocation();

  const goBackLink = useRef(location.state?.from ?? `/`);
  return (
    <div>
      <Link to={goBackLink.current} state={{ from: location }}>
        Go Back
      </Link>
      <LogInForm />
    </div>
  );
}
