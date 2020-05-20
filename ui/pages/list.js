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
  Row,
  Card,
  Button
 } from 'react-bootstrap'
import react, {Component} from 'react'
import list from './api/list'

export default class List extends react.Component {
  constructor(ss) {
    super();
    this.state = {
      error: null,
      data: []
    }
    console.log("cons", ss)
    console.log("asdf", window)
    this.onChange = this.onChange.bind(this)
    this.onRand = this.onRand.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  async componentDidMount() {
    // const list();
    console.log("WWW", this)
    const { data, error } = await list()
    console.log("sss", data, error)
    this.setState({data, error})
  }

  onChange = (e) => {

  }

  onRand = () => {

  }

  onSave = ()=> {

  }

  render() {
    if (this.state.error || !this.state.data) {
      return (
        <div>Failed to load</div> 
      )
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
        <ul>
          <Link href="/diary/new" as='/new'>
            <a>new diary</a>
          </Link>
        {
          this.state.data.map(diary => (
            <li key={diary.id}>
              <Link href="/diary/[id]" as={`/diary/${diary.id}`}>
                <a>{`diary ${diary.id}`}</a>
              </Link>
            </li>
          ))
        }
        </ul>
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
