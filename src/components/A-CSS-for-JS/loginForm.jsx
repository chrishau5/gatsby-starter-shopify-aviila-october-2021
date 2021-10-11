import * as React from "react"
import styled from "styled-components"

export function LoginForm({ handleSubmit }) {
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label>
        Email:
        <Input type="email" placeholder="me@you.com" />
      </Label>
      <Label>
        Password:
        <Input type="password" />
      </Label>
      <Submit>Log In</Submit>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  width: max-content;
  margin: 16px auto;
  border: 1px solid var(--light-fade-80);
  padding: 26px 32px 32px;
  border-radius: 10px;
  background: var(--color-gray-100); ;
`

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
`

const Input = styled.input`
  display: block;
  width: 175px;
  border: 1px solid black;
  border-bottom-width: 2px;
  padding: 6px 8px;
  margin-top: 4px;
  border-radius: 2px 2px 3px 3px;

  &:focus {
    outline: 3px auto blue;
    outline-offset: 2px;
    border-color: transparent;
  }
`

const Submit = styled.button`
  display: block;
  margin-top: 40px;
  width: 100%;
  background: var(--button);
  color: var(--dark);
  padding: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 3px;

  &:focus {
    outline: 3px auto blue;
    background: blue;
    outline-offset: 2px;
  }
`
