import bcrypt from 'bcryptjs';
import { raw } from 'body-parser';
import db from '../models/index';
let HandlesMessageText = (recipient,sender_psid,message) => {
 console.log("======================================")
 console.log(recipient,sender_psid,message)
 return new Promise(async(resolve,reject) =>{
  try {
      
      await db.Messages.create({
        recipient:recipient,
        sender_id:id_user,
          name:data.name,
      })
      resolve('Lưu thông tin page người dùng thành công !')
  } catch (e) {
      reject(e);
  }
})
}
module.exports = {
  HandlesMessageText:HandlesMessageText,
  };