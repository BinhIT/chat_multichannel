import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt=  bcrypt.genSaltSync(10);
let createNewUser = async (data) =>
{
    return new Promise(async(resolve,reject) =>{
        try {
            let hashPasswordFromBcypt = await hashUserPassword(data.password);
            await db.User.create({
                email:data.email,
                uid:data.uid,
                password:hashPasswordFromBcypt,
                firstName:data.fistName,
                lastName: data.lastName,
                address: data.address,
                phonenumber:data.phonenumber,
                gender:data.gender=='1'? true:false,
                roleID:data.roleId,
            })
            resolve('Tạo người dùng thành công !')
        } catch (e) {
            reject(e);
        }
    })
}
let createNewUserFB = async (data) =>
{
    return new Promise(async(resolve,reject) =>{
        try {
            let hashPasswordFromBcypt = await hashUserPassword('amechatuser'+data.id);
            await db.User.create({
                email:data.email,
                uid:data.id,
                image:data.picture.data.url,
                password:hashPasswordFromBcypt,
                firstName:data.first_name,
                lastName: data.last_name,
                address: data.address,
                phonenumber:data.phonenumber,
                gender:data.gender=='1'? true:false,
                roleID:data.roleId,
            })
            
            resolve('Tạo người dùng thành công !')
        } catch (e) {
            reject(e);
        }
    })
}
let hashUserPassword = (password) =>
{
    return new Promise(async(resolve,reject) =>{
        try {
            let hashPassword=await bcrypt.hashSync(password,salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}
let getAllUser = async() =>{
    return new Promise((resolve,reject)=>{
        try {
            let users= db.User.findAll({
                raw:true,
            });
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
module.exports ={
    createNewUser:createNewUser,
    getAllUser:getAllUser,
    createNewUserFB:createNewUserFB
}