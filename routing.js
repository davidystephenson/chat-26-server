const express = require('express')

module.exports = function routing (dispatch, messages) {
  const router = express.Router()

  return router.post('/message', (request, response) => {
    const { message } = request.body

    console.log('message test:', message)

    messages.push(message)

    dispatch(messages)

    response.status(201).send(message)
  })
}
