import React, { useState } from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'

// TODO
// Stitch this form into api client, connect to DB
// Style this in semantic ui

function SignUp (props) {
  const [customerForm, setCustomerForm] = useState({
    email: '',
    username: '',
    password: '',
    userType: 'Customer'
  })

  function handleChange (e) {
    const { name, value } = e.target
    setCustomerForm({
      ...customerForm,
      [name]: value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    console.log(setCustomerForm)
  }

  function homePath (e) {
    e.preventDefault()
    props.history.push('/')
  }

  function toggleBusiness(e) {
    e.preventDefault()
    props.history.push(props.isCustomer ? '/BusinessSignup' : '/CustomerSignup')
  }

  return (
    <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Button onClick={toggleBusiness}>{props.isCustomer ? 'Business Sign up' : 'Customer Sign up'}</Button>
        <h1>{props.isCustomer ? 'Customer' : 'Business'} Sign up</h1>
        <Form>
          <Form.Field>
            <label>Email:</label>
            <input type='text'
              placeholder='Enter email'
              name='email'
              required
              value={customerForm.email}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>{props.isCustomer ? 'Username:' : 'Business:'}</label>
            <input type='text'
              placeholder={props.isCustomer ? 'Choose username' : 'Choose business name'}
              name='username'
              required
              value={customerForm.username}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type='text'
              placeholder='Choose password'
              name='password'
              required
              value={customerForm.password}
              onChange={handleChange}
            />
          </Form.Field>
          <Button postive onSubmit={handleSubmit} type='submit'>Submit</Button>
        </Form>
        <Button onClick={homePath}>Home</Button>
      </Grid.Column>
    </Grid>
  )
}

export default SignUp
