import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail(``);
    setPassword(``);
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            autoComplete="name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
