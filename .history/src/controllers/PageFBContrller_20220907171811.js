import userSevice from "../services/UserSevice"
import Pageservice from "../serviceccs/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    data_page.forEach(async element => {
    let page= await Pageservice.checkPagefb(element.id);
    if(page.status){
    let createNewPage= await Pageservice.createNewPage(element,re);
    console.log(createNewPage);
    }else{
    }
     });

}

module.exports = {
    HandlePageFB:HandlePageFB,
}