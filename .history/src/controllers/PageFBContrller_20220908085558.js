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
    let createNewPage= await Pageservice.createNewPage(element,req.params.id);
    console.log(createNewPage);
    }else{
    }
     });

}
//Get page by id 
let HandleLoadPage = async (req,res) =>
{
    let page= await Pageservice.checkPagefb(req.params.id);
}

module.exports = {
    HandlePageFB:HandlePageFB,
    HandleLoadPage:HandleLoadPage
}