import messageBird from 'messagebird'

const { ACCESS_KEY } = process.env

const messageBirdClient = messageBird(ACCESS_KEY)

export function sendSms(event, context, callback) {
  const body = JSON.parse(event.body)
  body.messagesToSend.map(messageToSend => { 
    const { originator, recipients, body } = messageToSend
    messageBirdClient.messages.create({ originator, recipients, body }, (err, data) => {
      if (err) callback(err, { statusCode: 400 })
      else callback(null, { statusCode: 204 })
    })
  })
}
