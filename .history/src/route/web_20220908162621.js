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
  return app.use("/", router);
}
module.exports = initWebRouters;
