export default async function handler(req, res) {
  const twiml = `<Response>
    <Say voice="Polly.Joanna">Hi! This is your AI assistant. Please tell me why you're calling today.</Say>
  </Response>`;

  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(twiml);
}
Add Twilio voice webhook API handler
