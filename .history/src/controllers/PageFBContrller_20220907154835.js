import userSevice from "../services/UserSevice"
import Pageservice from "../services/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    data_page.forEach(async element => {
    let checkpage= await Pageservice.checkPagefb(element.id);
    if(checkpage){
    
    }else{
    let createNewPage= await Pageservice.createNewPage(element);
    return res.status(200).json({
        status:true,
        errCode:0,
        msg:"Lưu dữ liệu thành công",

    }) 
    }
     });

}

module.exports = {
    HandlePageFB:HandlePageFB,
}