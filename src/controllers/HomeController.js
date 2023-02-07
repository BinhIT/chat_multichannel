import db from '../models/index'
import CRUDService from '../services/CRUDsevice'
let getHomePage = async(req,res) =>
{
try
    {
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homepage.ejs',{
            data:JSON.stringify(data)
        });
    }catch(e){
        console.log(e);
    }
}
let getCRUD = (req,res) =>
{
   
    return res.render('crud.ejs');
}
let postCRUD = async(req,res) =>
{
    if(!req.body.email || !req.body.password){

        return res.status(500).json({
            status: false,
            errCode:1,
            msg:'Không để bỏ trống email hoặc mật khẩu',
        })
    }else{
        let message = await  CRUDService.createNewUser(req.body);
        return res.status(200).json({
            status: true,
            errCode:1,
            msg:'Đăng kí tài khoản thành công !',
        })
    }
 
}
let handleCRUD = async(req,res) =>
{
    let data= await CRUDService.getAllUser();
    console.log(data);
    return res.render('display.ejs',{
        datatable:data
    });
}
module.exports=
{
    getHomePage:getHomePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    handleCRUD:handleCRUD,
}