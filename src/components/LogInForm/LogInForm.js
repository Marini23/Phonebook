// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import { Form, Input, BtnSubmit } from './LogInForm.styled';

export default function LogInForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>LOG IN</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Email
          <Input type="email" name="email" autoComplete="email" />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </label>
        <BtnSubmit type="submit">Log In</BtnSubmit>
      </Form>
    </div>
  );
}
