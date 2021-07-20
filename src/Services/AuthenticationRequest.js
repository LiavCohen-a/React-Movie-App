// Imports
import fireBase from '../FireBase/connection/fireBase';

// Variables

// Functions
let Registration =async (userCredential) => {

        return new Promise(async (resolve , reject) => {
         fireBase.auth().createUserWithEmailAndPassword(userCredential.Email,userCredential.Password)
            .then((response) => {
                resolve(response.user)
            })
            .catch((err) => {
                var errorCode = err.code;
                resolve(errorCode)
            })
        })
}

let Login =async (userCredential) => {

       return new Promise(async (resolve , reject) => {
        fireBase.auth().signInWithEmailAndPassword(userCredential.Email,userCredential.Password)
            .then(async(response) => {
                if(response)
                {
                    resolve(true)
                }
            })
            .catch((err) => {
                var errorCode = err.code;
                resolve(errorCode)
            })
       })
}


let authRegisterCase = (msg) => {
    let txt = "";
    switch (msg) {

        case "auth/email-already-in-use": txt = "Email Is Already In Use !"
        return txt;

        case "auth/weak-password": txt = "Password Is To Weak !"
        return txt;

        default:
            "Something Went Wrong !"
            break;
    }
}

let authLoginCase = (msg) => {
    let txt = "";
    switch (msg) {

        case "auth/user-not-found": txt = "User Is Not Exist !"
        return txt;

        case "auth/wrong-password": txt = "Wrong Password !"
        return txt;
        
        case "auth/too-many-requests": txt = "To Many Request Try Again In 60 Sec !"
        return txt;

        case "auth/invalid-email": txt = "Invalid Email - Try Again !"
        return txt;
        
        default:
            "Something Went Wrong !"
            break;
    }
}

let userDetailsExist = () => {
    const user = fireBase.auth().currentUser;
    if(user.displayName == null)
    {
        return false;
    }
    else{
       return true;
    }
}

let userDetailsUpdate = (userName) => {
    const user = fireBase.auth().currentUser;
    return new Promise((resolve,reject) => {
        user.updateProfile({
            displayName: userName
          }).then((response) => {
            resolve(true);
          }).catch((error) => {
            let errorMessage = error.message;
            resolve(false);
          });  
    })

}

let setUserDetailsState = () => { 
    const user = fireBase.auth().currentUser;
    const displayName = user.displayName;
    let actionObj = {
        type: "setName",
        payload : displayName
    }
    return actionObj;

}

let isLogIn = () => {
    return new Promise((resolve,reject) => {
        fireBase.auth().onAuthStateChanged((user) => {
            if (user) {
              var uid = user.uid;
              resolve(true)
              // ...
            } else {
                resolve(false)
            }
          });
    })
   
}

let logOut = () => {
    return new Promise ((resolve , reject) => {
        fireBase.auth().signOut().then(() => {
           resolve(true)
          }).catch((error) => {
            resolve(false)
          });
    })

}

// Exports
export default {isLogIn,logOut ,Registration ,  Login , authRegisterCase , authLoginCase , setUserDetailsState ,userDetailsUpdate , userDetailsExist};
