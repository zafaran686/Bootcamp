
const{
usersController,
adminController,
clientcontroller
}= require('../controllers');

const signup = async (body) => {
// apply validation
if (!body.userName){
    return Promise.reject({ error: "userName is required"});
}
if (!body.password){
    return Promise.reject({ error: "password is required"});
}
if (!body.userType){
    return Promise.reject({ error: "usertype is required"});
}
if (!body.data){
    return Promise.reject({error: "data is required"});
}

try {
    let result= null;
const userType= body.userType;
switch(userType){
    case 'admin':
        //apply admin fields validation here
        if(!body.data.firstName){
            return Promise.reject({error: "First Name is require"});
        } 
        if(!body.data.lastName){
            return Promise.reject({error: "Last Name is require"});
        } 
       result = await adminController.addAdmin(body.data);
        break;
    case 'client':
        // appply client fields validation here
        if(!body.data.firstName){
            return Promise.reject({error: "First Name is require"});
        } 
        if(!body.data.lastName){
            return Promise.reject({error: "Last Name is require"});
        } 
        if(!body.data.age){
            return Promise.reject({error: "Age is require"});
        } 
        if(!body.data.dob){
            return Promise.reject({error: "DOB is require"});
        } 
        result= await clientcontroller.addClient(body.data);
        break;
    default:
        return Promise.reject({ error: "user type is invalid"});
}

const userJson ={
    userName: body.userName,
    password: body.password, // make this password encrypet
    userType: {
        kind: userType,
        item: result._id
    }
};
const user= await usersController.addUser(userJson);
return user;
} catch (ex) {
    return Promise.reject({ error: ex});
}


} ;

module.exports= {
    signup
}