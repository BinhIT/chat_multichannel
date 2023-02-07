import userSevice from "../services/UserSevice"
import Pageservice from "../services/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    data_page.forEach(async element => {
    let pagedata= await Pageservice.checkPagefb(element.id);
    console.log(pagedata.status);
    if(pagedata.status){
        let createNewPage= await Pageservice.createNewPage(element);
    }else{
    let pagedata= await Pageservice.checkPagefb(element.id);
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