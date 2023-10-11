import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { Form, Input, BtnSubmit } from './LogInForm.styled';

export default function LogInForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(logIn({ email, password }));
    setEmail(``);
    setPassword(``);
  };

  return (
    <div>
      <h1>LOG IN</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </label>
        <BtnSubmit type="submit">Log In</BtnSubmit>
      </Form>
    </div>
  );
}
