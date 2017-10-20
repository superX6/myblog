import axios from 'axios'


export function createUser (data) {
  console.log('diao yong le axios.post')
  const url = 'api/login/createAccount'
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res)
  })
}

export function checkAccount (data) {
  const url = 'api/login/checkAccount'
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res)
  })
}
