import fs from 'fs'
import express from 'express'
import yargs from 'yargs'
let argv = yargs.argv

const port = argv.p
const buildRoot = './build/es6-bundled'
const app = express()

app.use(express.static(buildRoot))

app.get('/api/ping', (req, res) => res.end('pong'))

app.get('/*', (req, res) => {
  if (fs.existsSync(`${buildRoot}/index`)) {
    fs.createReadStream(`${buildRoot}/index.html`).pipe(res)
  } else {
    res.end('build the project (yarn build) before serving the front routes')
  }
})

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})
