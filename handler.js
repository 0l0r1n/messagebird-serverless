import messageBird from 'messagebird'

const { ACCESS_KEY } = process.env

const messageBirdClient = messageBird(ACCESS_KEY)

export function sendSms(event, context, callback) {
  messageBirdClient.balance.read( (err, data) => {
    callback(err, data)
  })
}
