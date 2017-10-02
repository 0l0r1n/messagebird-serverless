import messageBird from 'messagebird'

const { ACCESS_KEY } = process.env

const messageBirdClient = messageBird(ACCESS_KEY)

export function sendSms(event) {
  event.messagesToSend.map(messageToSend => {
    const { originator, recipients, body } = messageToSend
    const params = { originator, recipients, body }
    messageBirdClient.messages.create(params, (err, data) => {
      if (err) return console.log(err)
      else console.log(data)
    })
  })
}