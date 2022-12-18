const { query } = require('express');
const{ 
    clientModel 
}=  require('../models');

const addClient= (body) => {
 const doc = new clientModel(body);
 const query = { _id: doc._id};
 return clientModel.findOneAndUpdate(query, doc ,{
upsert: true,
new: true,
});
};

const updateClient= (body) => {
    const query = { _id: body._id};
    return clientModel.findOneAndUpdate(query, body ,{
   new: true,
   });
   };

const deleteClient = (filter) => {
    return clientModel.deleteOne(filter);
};

const getAllClient = (filter)=> {
    return clientModel.find(filter);
};

const getClient = (filter) => {
    return clientModel.findOne(filter);
}; 

   module.exports= {
   addClient,
   updateClient,
   deleteClient,
   getAllClient,
   getClient
}