const UserService = require('../services/user.services');

exports.login = async(req,res,next)=>{
    try{
        const { name, password } = req.body;
        const user = await UserService.loginUser(name, password);
        if (user) {
            res.json(true);
        } else {
            res.json(false);
        }
    }catch(err){
        console.error(err);
        res.status(500).json(false);
    }
};
