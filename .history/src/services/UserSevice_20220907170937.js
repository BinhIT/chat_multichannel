import bcrypt from 'bcryptjs';
import db from '../models/index';
let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes:['email','roleID','password','id','uid','image','firstName','lastName'],
                    where: { email: email },
                    raw:true
                   
                });
                console.log(user)
                if (user) {
                   let check = await bcrypt.compareSync(password, user.password);
                    
                    console.log('Trạng thái check: '+check)
                    if (check) {
                        userData.status= true,
                        userData.errCode = 0;
                        userData.errMsg = "Thông tin đúng , tiến hành đăng nhập !";
                        delete user.password;
                        userData.user = user;
                    }
                    else {
                        userData.status= false,
                        userData.errCode = 3;
                        userData.errMsg = "Mật khẩu không khớp ! Vui lòng nhập lại";
                    }
                    resolve(userData)
                } 
            }
            else {
                userData.errCode = 1,
                userData.errMsg = "Email không tồn tại trong hệ thống ! Vui lòng đăng kí";
                resolve(userData)
            }
            
        } catch (e) {
            reject(e);
        }
    })
}
let handleUserLoginFB = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes:['email','roleID','password','id','uid','image','firstName','lastName'],
                    where: { email: email },
                    raw:true
                   
                });
                if (user) {     
                    userData.status= true,
                        userData.errCode = 0;
                        userData.errMsg = "Tài khoản này đã đã tồn tại trong hệ thống ! tiến hành đăng nhập !";
                        delete user.password;
                        userData.user = user;
                    resolve(userData)
                } 
            }
            else {
                userData.status= true,
                userData.errCode = 1,
                userData.errMsg = "Tài khoản này không tồn tại trong hệ thống ! Lưu dữ liệu và đăng nhập ";
                resolve(userData)
            }
        } catch (e) {
            reject(e);
        }
    })
}
let handleSignup = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes:['email','roleID','password','id','uid','image','firstName','lastName'],
                    where: { email: email },
                    raw:true
                   
                });
                console.log(user)
                if (user) {
                    //Nếu user đã tồn tại
                    userData.status= false,
                    userData.errCode=1,
                    userData.errMsg = "Email này đã tồn tại trong hệ thống ! Hãy vào trang đăng nhập";
                    resolve(userData)
                } 
            }
            else {
                userData.status= true,
                userData.errCode=0,
                userData.errMsg = "Tài khoản chưa tồn tại trên hệ thống ! Tiến hành lưu vào hệ thống";
                resolve(userData)
            }
            
        } catch (e) {
            reject(e);
        }
    })
}
let handleSignupFB = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes:['email','roleID','password','id','uid','image','firstName','lastName'],
                    where: { email: email },
                    raw:true
                   
                });
                console.log(user)
                if (user) {
                    userData.status= false,
                    userData.errCode=1,
                    userData.errMsg = "Tài khoản facebook này đã tồn tại trong hệ thống ! Tiến hành đăng nhập";
                    resolve(userData)
                } 
            }
            else {
                userData.status= true,
                userData.errCode=0,
                userData.errMsg = "Đăng kí thành công ! Tiến hành đăng nhập";
                resolve(userData)
            }
            
        } catch (e) {
            reject(e);
        }
    })
}
let checkUserEmail = (Useremail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({  
                where: { email: Useremail }
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
// Get user by id
let GetUserByID = (Useremail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);
            if (isExist) {
                //user already exist
                let user = await db.User.findOne({
                    attributes:['email','uid','phone_number','lastName','fistName','image'],
                    where: { email: email },
                    raw:true
                   
                });
                console.log(user)
                if (user) {
                    userData.status= false,
                    userData.errCode=1,
                    userData.errMsg = "Tài khoản facebook này đã tồn tại trong hệ thống ! Tiến hành đăng nhập";
                    resolve(userData)
                } 
            }
            else {
                userData.status= true,
                userData.errCode=0,
                userData.errMsg = "Đăng kí thành công ! Tiến hành đăng nhập";
                resolve(userData)
            }
            
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    checkUserEmail: checkUserEmail,
    handleSignup:handleSignup,
    handleSignupFB:handleSignupFB,
    handleUserLoginFB:handleUserLoginFB,
    GetUserByID:GetUserByID,
}