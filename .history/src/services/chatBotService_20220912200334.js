import bcrypt from 'bcryptjs';
import { raw } from 'body-parser';
import db from '../models/index';
let checkPagefb = (id_page) => {}
module.exports = {
    postWebhook: postWebhook,
    getWebhook: getWebhook
  };