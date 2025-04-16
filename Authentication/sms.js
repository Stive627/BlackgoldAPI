const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "3edd77e9",
  apiSecret: "w5ikYIZ4I0L8tVk0"
})

const from = "Vonage APIs"
const to = "917696793453"

async function createSMS(text) {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}
module.exports = createSMS