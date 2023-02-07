const verifyWebhook = (req, res) => {
    let VERIFY_TOKEN = 'pusher-bot';

    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    if (mode && token === VERIFY_TOKEN) {
      console.log( VERIFY_TOKEN);
      res.status(200).send(challenge);
    } else {
      console.log("403");
        res.sendStatus(403);
      }
  };
 let WebhookEvent = (req, res) => {
    if (req.body.object === 'page') {
      req.body.entry.forEach(entry => {
        entry.messaging.forEach(event => {
          if (event.message && event.message.text) {
            co(event);
          }
        });
      });

      res.status(200).end();
    }
  };
  module.exports = { 
    verifyWebhook:verifyWebhook,
    WebhookEvent: WebhookEvent
   }; 
