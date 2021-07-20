// Imports
import fireBase from '../FireBase/connection/fireBase';

// Variables
let collection = "Users";

// Functions

let getUsers =async () => {
    const users = [];
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(user =>{
                let userObj = {
                    UserId : user.id ,
                    FirstName : user.data().FirstName ,
                    LastName : user.data().LastName , 
                    SessionTimeOut : user.data().SessionTimeOut ,
                    CreatedDate : user.data().CreatedDate 
                }
                users.push(userObj);
                })
    return users;
}

let getUser =async (id) => {
    let userData = {};
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(user =>{
                if(user.id == id)
                {
                    userData = user.data();
                }
                })
    return userData;
}

let addUser =async (newUserData) => {
    let resp = await fireBase.firestore().collection(collection).add(newUserData);
    return resp;
}

let editUser = async (id,newUserData) => {
    await fireBase.firestore().collection(collection).doc(id).set(newUserData)
    return "User Was Updated !"
}

let deleteUser =async (id) => {
    await fireBase.firestore().collection(collection).doc(id).delete()
    return "User Was Deleted !"

}
// Exports
export default { getUsers,getUser,addUser,deleteUser,editUser};
