import bcrypt from 'bcryptjs';
import db from '../models/index';
let checkPagefb = (id_page) => {
    return new Promise(async (resolve, reject) => {
        Page
        try {
            let user = await db.Page.findOne({  
                where: { id: id_page }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}
let createNewPage = async (data,id_user) =>
{
    return new Promise(async(resolve,reject) =>{
        try {
            
            await db.Page.create({
                id:data.id,
                id_admin:id_user,
                short_token:data.access_token,
                name:data.name,
                status:data.gender=='1'? true:false,
            })
            resolve('Lưu thông tin page người dùng thành công !')
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    checkPagefb:checkPagefb,
    createNewPage:createNewPage
}