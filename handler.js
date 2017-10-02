import messageBird from 'messagebird'

const { ACCESS_KEY } = process.env

const messageBirdClient = messageBird(ACCESS_KEY)

export function sendSms(event) {
  event.messagesToSend.map(messageToSend => {
    const { originator, recipients, body } = messageToSend
    messageBirdClient.messages.create({ originator, recipients, body }, (err, data) => {
      if (err) return console.log(err)
      else console.log(data)
    })
  })
}
