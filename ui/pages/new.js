import useSwr from 'swr'
import Link from 'next/link'
import Head from 'next/head'
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Container,
  Button
} from 'react-bootstrap'
import react, { Component } from 'react'

export default class New extends react.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      content: ''
    }
  }
  onTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  onContentChange = (e) => {
    this.setState({ content: e.target.value })
  }
  onSave = () => {
    // get the state
    // save the data
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
            Get started by editing <code>pages/index.js</code>
          </p>
        </Container>
        <Container>
          <form>
            <FormGroup>
              <Button onClick={this.onSave}>save</Button>
            </FormGroup>
            <FormGroup
              controlId="formBasicText"
            >
              <FormControl
                type="text"
                value={this.state.title}
                placeholder="title"
                onChange={this.onTitleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>文字区域</FormLabel>
              <Form.Control
                as="textarea"
                rows={20}
                placeholder="textarea"
                value={this.state.content}
                onChange={this.onContentChange}
              />
            </FormGroup>
          </form>
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
