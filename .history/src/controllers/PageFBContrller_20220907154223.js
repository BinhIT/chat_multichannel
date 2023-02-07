import userSevice from "../services/UserSevice"
import Pageservice from "../services/PageFBservice"
import CRUDService from "../services/CRUDsevice"
//Get user by id 
let HandlePageFB = async (req,res) =>
{
    let data_page=req.body
    let checkpage= await Pageservice.checkPagefb(data_page  .id);
    console.log(checkpage)
}

module.exports = {
    HandlePageFB:HandlePageFB,
}