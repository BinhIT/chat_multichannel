import userSevice from "../services/UserSevice"
import Pageservice from "../services/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    data_page.forEach(async element => {
    let page= await Pageservice.checkPagefb(element.id);
    if(pagedata.status){
    let createNewPage= await Pageservice.createNewPage(element);
    let pagedata= await Pageservice.checkPagefb(element.id);
    return res.status(200).json({
        status:pagedata.status,
        errCode:pagedata.errCode,
        msg:pagedata.errMsg,
        user:pagedata ? pagedata :{}
        }) 
    }else{
    let checkpage= await Pageservice.checkPagefb(element.id);
    return res.status(200).json({
        status:pagedata.status,
        errCode:pagedata.errCode,
        msg:pagedata.errMsg,
        user:pagedata ? pagedata :{}
        }) 
    }
     });

}

module.exports = {
    HandlePageFB:HandlePageFB,
}