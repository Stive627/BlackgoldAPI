// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";
require('dotenv').config()
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

async function createMessage(otp) {
  const message = await client.messages.create({
    body: otp,
    from: "+13655362562",
    to: "+917696793453",
  });

  console.log(message.body);
}

module.exports = createMessage