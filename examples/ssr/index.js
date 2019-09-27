const React = require('react')
const express = require('express')
const ReactDOM = require('react-dom/server')
const { Ripple, Ellipsis, Ring } = require('react-html-css-spinners')

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const container = React.createElement(React.Fragment, null, [
    React.createElement(Ripple, { key: 'ripple' }),
    React.createElement(Ellipsis, { key: 'ellipsis' }),
    React.createElement(Ring, { key: 'ring' })
  ])
  const content = ReactDOM.renderToString(container)
  const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
            </body>
        </html>
    `
  res.send(html)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
