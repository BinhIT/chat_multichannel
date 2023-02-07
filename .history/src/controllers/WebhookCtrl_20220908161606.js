const verifyWebhook = (req, res) => {
    let VERIFY_TOKEN = 'pusher-bot';

    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
      }
  };
  Webhook = (req, res) => {
    if (req.body.object === 'page') {
      req.body.entry.forEach(entry => {
        entry.messaging.forEach(event => {
          if (event.message && event.message.text) {
            processMessage(event);
          }
        });
      });

      res.status(200).end();
    }
  };
  module.exports = { verifyWebhook }; 
