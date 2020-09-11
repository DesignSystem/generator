// eslint-disable-next-line
require = require('esm')(module)
const Main = require('@architect/views/pages/main.js').default

exports.handler = async function http(req) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: Main()
  }
}