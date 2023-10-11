import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUserEmail } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <div>
      <p>{email}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
