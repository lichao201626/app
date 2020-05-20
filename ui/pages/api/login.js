import Router from 'next/router'

export default (username) => {
  console.log("username", username)
  return Router.push('/list', {
    query: {
      email: username
    }
  });
}
