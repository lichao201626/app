import useSwr from 'swr'
import Link from 'next/link'
import Head from 'next/head'
import {
  Form,
  FormGroup,
  FormLabel,
  Container
} from 'react-bootstrap'
import react, {Component} from 'react'
import list from '../api/list'
import detail from '../api/diary/detail'

export default class New extends react.Component {
  constructor() {
    super()
    this.state = {
      error: '',
      data: null
    }
  }

  render() {
    if (!this.props.data) {
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
              <FormLabel>文字区域</FormLabel>
              <Form.Control as="textarea" readOnly rows={20} placeholder="textarea" defaultValue={this.props.data.name} />
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

// This function gets called at build time
export async function getStaticPaths() {
  const posts = await list()

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map(post => ({
    params: { id: post.id.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const {error, data} = await detail(params.id);
  // Pass post data to the page via props
  return { props: { data } }
}