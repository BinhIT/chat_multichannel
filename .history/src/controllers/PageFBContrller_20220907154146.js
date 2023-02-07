import userSevice from "../services/UserSevice"
import Pageservice from "../services/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    let checkpage= await Pageservice.checkPagefb(element.id);
    console.log
}

module.exports = {
    HandlePageFB:HandlePageFB,
}