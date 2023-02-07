import userSevice from "../services/UserSevice"
import Pageservice from "../services/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    data_page.forEach(async element => {
    let checkpage= await Pageservice.checkPagefb(element.id);
    if(Pagedata.status){
    let createNewPage= await Pageservice.createNewPage(element);
    }else{
    let checkpage= await Pageservice.checkPagefb(element.id);
    return res.status(200).json({
        status:userData.status,
        errCode:userData.errCode,
        msg:userData.errMsg,
        user:userData ? userData :{}
        }) 
    }
     });

}

module.exports = {
    HandlePageFB:HandlePageFB,
}