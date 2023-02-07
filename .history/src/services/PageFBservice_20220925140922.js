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
                name:data.name,
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
            let page = await db.Page.findAll({  
                attributes:['id','name','image','fan_count'],
                where: { id_admin: id_user },
                raw:true
            })
            if (page) {

            resolve(page)
            } else {
                 pagedata.status= false,
                 pagedata.errCode = 1;
                 pagedata.errMsg = "Không có dữ liệu";
                 pagedata.data = page;
            resolve(pagedata)
            }
        } catch (e) {
            reject(e);
        }
    })
}
let UpdatePage = async (data,id_page) =>
{
    return new Promise(async(resolve,reject) =>{
        try {
            
            await db.Page.update(
                {
                    image: data.picture.data.url,
                    fan_count:data.fan_count
                  },
                  {
                    where: { id:id_page},
                  }
            )
            resolve('Sucess')
        } catch (e) {
            reject(e);
        }
    })
}
let UpdateLongtokenPage = async (data,id_page) =>
{
    console.log(id_page);
    return new Promise(async(resolve,reject) =>{
        try {
            
             await db.Page.update(
                {
                    token:data
                  },
                  {
                    where: {id:id_page}
                  }
            )
            resolve("Sucess Update Longtoken Page")
        } catch (e) {
            reject(e);
        }
    })
}
let GetAllUser = async () =>
{
    return new Promise(async(resolve,reject) =>{
        try {
            
            let all_user_id=await db.Messages.findAll(
                {
                  
                }
            )
            resolve(all_user_id)    
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    checkPagefb:checkPagefb,
    createNewPage:createNewPage,
    GetpagebyuserID: GetpagebyuserID,
    UpdatePage:UpdatePage,
    UpdateLongtokenPage:UpdateLongtokenPage,
    GetAllUser:GetAllUser
}