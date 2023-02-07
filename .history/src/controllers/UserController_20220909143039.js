import userSevice from "../services/UserSevice"
import CRUDService from "../services/CRUDsevice"
let handleLogin = async (req,res) =>
{
    let email = req.body.email;
    let password = req.body.password;
    if(!email || !password){
        return res.status(500).json({
            errCode:1,
            msg:'Không để bỏ trống email hoặc mật khẩu',
        })
    }
    let userData = await userSevice.handleUserLogin(email, password)
    return res.status(200).json({
        status:true,
        errCode:userData.errCode,
        msg:userData.errMsg,
        user:userData ? userData :{}
    })
}
let handleAuthFB =async(req, res) => {
    let email = req.body.email;
    let userData = await userSevice.handleSignupFB(email)
    if(userData.status){
        let createuser = await CRUDService.createNewUserFB(req.body);
        let userData = await userSevice.handleUserLoginFB(email)
        return res.status(200).json({
            status:userData.status,
            errCode:userData.errCode,
            msg:userData.errMsg,
            user:userData ? userData :{}
        })
    }else{
        let userData = await userSevice.handleUserLoginFB(email)
        return res.status(200).json({
            status:userData.status,
            errCode:userData.errCode,
            msg:userData.errMsg,
            user:userData ? userData :{}
        }) 
    }
    
  }
let handleSignup = async (req,res) =>
{
        let email = req.body.email;
        let password = req.body.password;
        let re_password = req.body.re_password;
        let phone_number = req.body.phone_number;
        let lastName = req.body.phone_number;
        let fistName = req.body.phone_number;
    if(!email ){
        return res.status(500).json({
            status:false,
            errCode:1,
            msg:'Không để bỏ trống email',
        })
    }if(!password ){
        return res.status(500).json({
            status:false,
            errCode:1,
            msg:'Không để bỏ trống password',
        })
    }if(password != re_password){
        return res.status(500).json({
            status:false,
            errCode:1,
            msg:'Xác nhận mật khẩu không đúng ',
        })
    }if(!phone_number){
        return res.status(500).json({
            status:false,
            errCode:1,
            msg:'Vui lòng nhập số điện thoại liên hệ',
        })
    }if(!lastName || !fistName){
        return res.status(500).json({
            status:false,
            errCode:1,
            msg:'Vui lòng nhập đầu đủ họ tên ',
        })
    }
    let userData = await userSevice.handleSignup(email, password)
    if(userData.status){
        let message = await CRUDService.createNewUser(req.body);
        return res.status(200).json({
            status:userData.status,
            errCode:userData.errCode,
            msg:userData.errMsg,
            user:userData ? userData :{}
        })
    }else{
        return res.status(200).json({
            status:userData.status,
            errCode:userData.errCode,
            msg:userData.errMsg,
            user:userData ? userData :{}
        }) 
    }
  
}
let Getlongacesstoken = 
module.exports = {
    handleLogin:handleLogin,
    handleSignup:handleSignup,
    handleAuthFB:handleAuthFB,
}