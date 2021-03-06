import Link from 'next/link'
import Head from 'next/head'

import {
  FormLabel,
  Form,
  FormControl,
  Container,
  Button,
  FormGroup
} from 'antd';

import login from './api/login'
import React, { Component } from 'react'

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      email: ''
    };
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  onChange = (e) => this.setState({ email: e.target.value })

  onClick = (e) => {
    return login(this.state.email)
  }

  render() {
    return (
      <Container className="md-container">
        <Head>
          <title>Diary</title>
          <link rel="icon" href="/favicon-32x32.png" />
        </Head>
        <Container>
          <h1>
            Welcome to Diary
          </h1>
          <p>
            Get started by login your email
          </p>
        </Container>
        <Container>
          <Form>
            <FormGroup
              controlId="formBasicText"
            >
              <FormLabel> email </FormLabel>
              <FormControl
                type="text"
                value={this.state.email}
                placeholder="email"
                onChange={this.onChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup>
              <Button onClick={this.onClick}>login {this.state.email}</Button>
            </FormGroup>
          </Form>
        </Container>

        <footer className="cntr-footer">
          <a>
            Powered by 824683639@qq.com
          </a>
        </footer>
      </Container>
    )
  }
}

export default Index
