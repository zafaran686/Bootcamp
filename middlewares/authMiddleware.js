const { signup }= require('../beans/common');

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
    userSignup
}