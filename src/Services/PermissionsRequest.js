// Imports
import fireBase from '../FireBase/connection/fireBase';

// Variables
let collection = "Permissions";
let userPermissions = {};

// Functions

let getAllPermissions =async () => {
    let permissions = [];
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(per =>{
        if(per.id == "JkmB43lA3F724OPBjNXI" )
        {
            let perObj = {
                PermissionsId : per.id ,
                Permissions : per.data().Permissions ,
            }
            permissions.push(perObj);
        }})
    return permissions[0].Permissions;
}

let getUserPermissions =async (id) => {

    let data = await fireBase.firestore().collection(collection).get()
    
    data.forEach(per =>{
                if(per.data().UserID == id)
                {
                    userPermissions = {
                        data : per.data(),
                        perId : per.id
                    }
                }})
    return userPermissions;
}


;
let addPermissionsToUser =async (userId,permissionsDataToUser) => {
    let obj = {
        UserID : userId,
        Permissions : permissionsDataToUser
    }
    await fireBase.firestore().collection(collection).add(obj);
    return "Permission To User Accepted !"
}

let deletePermissionsToUser = (id) => {
    fireBase.firestore().collection(collection).doc(id).delete().then(() => {
        return true
    }).catch((error) => {
        return  false
    });
}

let editUserPermissions = async (userId,newUserPermissions) => {
    let response = await getUserPermissions(userId)
    let obj = {
        Permissions : newUserPermissions  , 
        UserID : userId 
    }
    await fireBase.firestore().collection(collection).doc(response.perId).set(obj)
    return "User Permissions Was Updated !"
}

// Exports
export default {deletePermissionsToUser, getAllPermissions,getUserPermissions,editUserPermissions,addPermissionsToUser};
