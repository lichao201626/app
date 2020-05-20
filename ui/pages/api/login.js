import Router from 'next/router'

export default (username) => {
  // todo login server side
  // save auth in localstorage?
  return Router.push('/list');
}
