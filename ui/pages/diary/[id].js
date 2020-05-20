import useSwr from 'swr'
import Link from 'next/link'
import Head from 'next/head'
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Container,
  Button
} from 'react-bootstrap'
import react, {Component} from 'react'
import detail from '../api/diary/detail'

export default class New extends react.Component {
  constructor() {
    super()
    this.state = {
      error: '',
      data: null
    }
  }

  async componentWillMount() {
    // const list();
    console.log("asdfa", this,this.props, this.state)
    const { data, error } = await detail()
    console.log("sss", data, error)
    this.setState({data, error})
  }

  render() {
    if (!this.state.data) {
      return (<div> fail to load </div>)
    }
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
              <Button onClick={() => {
              }}>save</Button>
            </FormGroup>
            <FormGroup>
              <FormLabel>文字区域</FormLabel>
              <Form.Control as="textarea" rows={20} placeholder="textarea" defaultValue={this.state.data.name} />
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

