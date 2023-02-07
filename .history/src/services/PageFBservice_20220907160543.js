import bcrypt from 'bcryptjs';
import { raw } from 'body-parser';
import db from '../models/index';
let checkPagefb = (id_page) => {
    return new Promise(async (resolve, reject) => {
        Pagedata= {};
        try {
            let pagecheck = await db.Page.findOne({  
                attributes:['id','name'],
                where: { id: id_page },
                raw:true
            })
            if (pagecheck) {
                 Pagedata.status= true,
                 Pagedata.errCode = 0;
                 Pagedata.errMsg = "Data đã tồn tại";
                 Pagedata.page = pagecheck;
            resolve( Pagedata)
            } else {
                 Pagedata.status= false,
                 Pagedata.errCode = 0;
                 Pagedata.errMsg = "Data chưa tồn tại ";
                 Pagedata.page = pagecheck;
            resolve( Pagedata)
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