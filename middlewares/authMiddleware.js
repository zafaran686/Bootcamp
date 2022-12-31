const { sign, verify } = require ('jsonwebtoken');
const { signup }= require('../beans/common');
const { login } = require('../beans/common');
const{ usersController, adminController, clientcontroller} = require('../controllers');


const executeLogin = async(username, password, cb) => {
    try {
      const filter = { userName: username, password: password};
      const user= await usersController.getUser(filter);
      if (!user){
        return cb (null, false);
      }  

      return cb (null, user);
      console.log(user)
    } catch (error) {
        return cb(error, false);
    }
};

const generateToken = async ( req, res, next) => {
    const user = req.user;

    const json = {
        _id: user._id
    };

    const token = sign({ user: json }, 'someSecretvalue');
    req.token= token;
    next();
};

const respond = async ( req, res, next) => {
    const user = req.user;

    const userType = user.userType.kind;
    const item = user.userType.item;
    let data= null;
    if (userType === "admin"){
        data = await adminController.getAdmin({ _id: item});
    }
    if (userType === 'client'){
        data = await clientcontroller.getClient({ _id: item}); 
    }
    const result ={ token: req.token, user: user.userType.item };
    res.status(200).send(result);
    
};



const userSignup = async( req, res, next) => {
const body = req.body;
try {
    const result= await signup(body);
    return res.status(200).send(result);
 } catch ( error){
    return res.status(400).send(error);
 }

};
module.exports={
    userSignup,
    executeLogin,
    generateToken,
    respond
}