import express from "express";
import PageFbCtrl from "../controllers/PageFBCtrl";
import HomeController from "../controllers/HomeController";
import UserController from "../controllers/UserController";
import chatBotController from "../controllers/chatBotController";
let router = express.Router();
let initWebRouters = (app) => {
    router.post('/post-crud', HomeController.postCRUD);
    router.get('/get-crud', HomeController.handleCRUD);
    // =================API USER========================
    router.post('/api/login', UserController.handleLogin);
    router.post('/api/signup', UserController.handleSignup);
    router.post('/api/facebook/post-token/:id', UserController.GetLongAcessToken);
  //=======================Login With Facebook===========================
  router.post('/api/login/facebook', UserController.handleAuthFB);

  //===================API PAGE FACEBOOKS================================
  router.post('/api/post-page/:id',  PageFbCtrl.HandlePageFB);
  router.get('/api/load-page-by-userID/:id_user',  PageFbCtrl.HandleLoadPage);
  router.post('/api/post-info-page/:id_page',  PageFbCtrl.UpdatePagebyID);
  router.post('/api/post-long-token-page', PageFbCtrl.UpdatelongtokenPage);
  //=========================API MESS=============================================
  router.get('/api/get-all-user', PageFbCtrl.GetAllUser);
  //==================webhook============================
  router.get("/webhook", chatBotController.getWebhook);
  router.post("/webhook", chatBotController.postWebhook);
  return app.use("/", router);
}
module.exports = initWebRouters;

