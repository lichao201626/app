import Router from 'next/router'
import axios from 'axios'
//import fs from 'fs';

export default (email) => {
    // GET request for remote image in node.js
    axios({
            method: 'post',
            url: 'http://localhost:8000/login',
            data: {
                email
            }
        })
        .then(function (response) {
            console.log("sss", response, typeof response.data)
// response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });
  // todo login server side
  // save auth in localstorage?
  return Router.push('/list');
}
