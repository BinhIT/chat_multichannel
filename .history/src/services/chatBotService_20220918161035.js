import bcrypt from 'bcryptjs';
import { raw } from 'body-parser';
import db from '../models/index';
let HandlesMessageText = (recipient,sender_psid,message) => {
 console.log("======================================")
 console.log(recipient,sender_psid,message)
}
module.exports = {
  HandlesMessageText:HandlesMessageText,
  };