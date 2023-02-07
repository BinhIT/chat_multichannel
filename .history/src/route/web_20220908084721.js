import express from "express";
import PageFbCtrl from "../controllers/PageFBContrller"
import HomeController from "../controllers/HomeController";
import UserController from "../controllers/UserController";
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
  router.post('/api/load-page-by-userID/:id_user',  PageFbCtrl.HandlePageFB);
  return app.use("/", router);
}
module.exports = initWebRouters;

