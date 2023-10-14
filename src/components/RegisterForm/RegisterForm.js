import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { SignUpForm, Input, BtnSubmit } from './RegisterForm.styled';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      <SignUpForm onSubmit={handleSubmit}>
        <label>
          Name
          <Input type="text" name="name" autoComplete="name" />
        </label>
        <label>
          Email
          <Input
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
            autoComplete="email"
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
            autoComplete="current-password"
          />
        </label>
        <BtnSubmit type="submit">Register</BtnSubmit>
      </SignUpForm>
    </div>
  );
}
