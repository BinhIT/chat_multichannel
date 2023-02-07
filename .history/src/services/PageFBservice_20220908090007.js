import bcrypt from 'bcryptjs';
import { raw } from 'body-parser';
import db from '../models/index';
let checkPagefb = (id_page) => {
    return new Promise(async (resolve, reject) => {

        try {
            let pagedata = {};
            let page = await db.Page.findOne({  
                attributes:['id','name'],
                where: { id: id_page },
                raw:true
            })
            if (page) {
                 pagedata.status= false,
                 pagedata.errCode = 0;
                 pagedata.errMsg = "Data đã tồn tại";
                 pagedata.page = page;
            resolve(pagedata)
            } else {
                 pagedata.status= true,
                 pagedata.errCode = 0;
                 pagedata.errMsg = "Data chưa tồn tại ";
                 pagedata.page = page;
            resolve(pagedata)
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
let GetpagebyuserID = (id_user) => {
    return new Promise(async (resolve, reject) => {

        try {
            let pagedata = {};
            let page = await db.Page.findOne({  
                attributes:['id','name'],
                where: { id_admin: id_user },
                raw:true
            })
            if (page) {
                 pagedata.status= false,
                 pagedata.errCode = 0;
                 pagedata.errMsg = "Data đã tồn tại";
                 pagedata.page = page;
            resolve(pagedata)
            } else {
                 pagedata.status= true,
                 pagedata.errCode = 0;
                 pagedata.errMsg = "Data chưa tồn tại ";
                 pagedata.page = page;
            resolve(pagedata)
            }
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    checkPagefb:checkPagefb,
    createNewPage:createNewPage
}