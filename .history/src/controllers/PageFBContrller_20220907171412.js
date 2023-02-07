import userSevice from "../services/UserSevice"
import Pageservice from "../services/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    data_page.forEach(async element => {
    let page= await Pageservice.checkPagefb(element.id);
    if(page.status){
    let createNewPage= await Pageservice.createNewPage(element);
    let page= await Pageservice.checkPagefb(element.id);
    return res.status(200).json({
        status:page.status,
        errCode:page.errCode,
        msg:page.errMsg,
        user:page ? page :{}
        }) 
    }else{
    let page= await Pageservice.checkPagefb(element.id);
    return res.status(200).json({
        status:page.status,
        errCode:page.errCode,
        msg:page.errMsg,
        user:page ? page :{}
        }) 
    }
     });

}

module.exports = {
    HandlePageFB:HandlePageFB,
}