import express from "express";
import PageFbCtrl from "../controllers/PageFBCtrl";
import HomeController from "../controllers/HomeController";
import UserController from "../controllers/UserController";
import WebhookCtrl from "../controllers/WebhookCtrl";
let router = express.Router();
let initWebRouters = (app) => {
    // router.get('/',UserController.handleSignupFB);
    router.post('/post-crud', HomeController.postCRUD);
    router.get('/get-crud', HomeController.handleCRUD);
    // =================API USER========================
    router.post('/api/login', UserController.handleLogin);
    router.post('/api/signup', UserController.handleSignup);
  //=======================Login With Facebook===========================
  router.post('/api/login/facebook', UserController.handleAuthFB);
  //===================API PAGE FACEBOOKS================================
  router.post('/api/post-page/:id',  PageFbCtrl.HandlePageFB);
  router.get('/api/load-page-by-userID/:id_user',  PageFbCtrl.HandleLoadPage);
  router.post('/api/post-info-page/:id_page',  PageFbCtrl.UpdatePagebyID);
  //==================webhook============================
  router.get('/webhook', function(req, res) {
    if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === VALIDATION_TOKEN) {
      console.log("Validating webhook");
      res.status(200).send(req.query['hub.challenge']);
    } else {
      console.error("Failed validation. Make sure the validation tokens match.");
      res.sendStatus(403);          
    }  
  });
  router.post('/webhook', function (req, res) {
    var data = req.body;
  
    // Make sure this is a page subscription
    if (data.object == 'page') {
      // Iterate over each entry
      // There may be multiple if batched
      data.entry.forEach(function(pageEntry) {
        var pageID = pageEntry.id;
        var timeOfEvent = pageEntry.time;
  
        // Iterate over each messaging event
        pageEntry.messaging.forEach(function(messagingEvent) {
          if (messagingEvent.message) {
            receivedMessage(messagingEvent);
          } 
          else if (messagingEvent.delivery) {
            receivedDeliveryConfirmation(messagingEvent);
          } 
          else {
            console.log("Webhook received unknown messagingEvent: ", messagingEvent);
          }
        });
      });
  
      // Assume all went well.
      //
      // You must send back a 200, within 20 seconds, to let us know you've 
      // successfully received the callback. Otherwise, the request will time out.
      res.sendStatus(200);
    }
  });
  return app.use("/", router);
}
module.exports = initWebRouters;

