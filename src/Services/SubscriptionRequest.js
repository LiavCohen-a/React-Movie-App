// Imports
import fireBase from '../FireBase/connection/fireBase';
import MembersRequest from "../Services/MembersRequest";

// Variables
let collection = "Subscriptions";


// Functions

let getSubscriptions =async () => {
    let subscriptions = [];
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(sub =>{
                let subObj = {
                    subID : sub.id,
                    MemberId : sub.data().MemberId ,
                    Movies : sub.data().Movies 
                }
                subscriptions.push(subObj);
                })
    return subscriptions;
}

let getSubscriptionsToMember =async (memberID) => {
    let subscriptions = {};
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(sub =>{
        if(sub.data().MemberId == memberID)
        {
            let subObj = {
                subID : sub.id,
                MemberId : sub.data().MemberId ,
                Movies : sub.data().Movies 
            }
            subscriptions = subObj;
        }         
                })
    return subscriptions;
}
let getSubscriptionByID =async (movieId) => {
    let tempArr = [];
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(sub =>{
                sub.data().Movies.forEach(movie => {
                    if(movie.MovieID == movieId )
                    {
                        let obj = {
                            memberId : sub.data().MemberId,
                            date : movie.Date
                        }
                        tempArr.push(obj)
                    }
                }) 
               
                })


        tempArr.map(async (member) => {
              let resp2 = await MembersRequest.getMember(member.memberId)
              member.memberName = resp2.Name

        })
    return tempArr;
}

let addSubscription =async (newSubData,memberID) => {

    let isNotExist = true;

    let result = await getSubscriptions();

    result.forEach(async (sub) => {
        if(sub.MemberId == memberID)
        {
            isNotExist = false;
            let obj = {
                MemberId : memberID,
                Movies : [...sub.Movies,newSubData]
            }
            await fireBase.firestore().collection(collection).doc(sub.subID).set(obj)
           
        }
    })

    if(isNotExist)
    {
        
    let obj = {
        MemberId : memberID,
        Movies : [newSubData]
    }
    await fireBase.firestore().collection(collection).add(obj)
    return "Subscription Was Created To Member !"

    }
    else{
        return "Subscription Was Updated !"
    }

}

let editSubscription = async (memberId,newMovieSubData) => {
    let result = await getSubscriptions();
    let index = result.findIndex(x => x.MemberId == memberId );
   
    if(index >= 0)
    {
            let movies = result[index].Movies;
            let obj = {
                MemberId : memberId,
                Movies : [...movies,newMovieSubData]
            }
            

    }
    else
    {
        let response = await addSubscription(memberId,newMovieSubData);
        return response;
    }
}

let deleteSubscriptionForMember =async (subId,movieId) => {
    let response = await getSubscriptions();
    let index = response.findIndex(x => x.subID == subId);
    let subscription = response[index];
    let index2 = subscription.Movies.findIndex(x => x.MovieID == movieId);
    if(index2 >= 0)
    {
        let newSubListToMember = subscription.Movies.splice(index2,1)
        let obj = {
            MemberId : subscription.MemberId,
            Movies : newSubListToMember
        }
        await fireBase.firestore().collection(collection).doc(subId).set(obj);
        return "Subscription Was Deleted !"
    }
    else{
        return "Something Went Wrong"
    }
   
}
let deleteSubscriptionForMovie =async (movieID) => {
     let response = await getSubscriptions();
    response.forEach(async (sub) => {
        let index = sub.Movies.findIndex(movie =>movie.MovieID == movieID)
        console.log(sub.Movies)
        let arr = sub.Movies.splice(index,1)
   
        let obj = {
            MemberId : sub.MemberId,
            Movies : sub.Movies
        }

        if(index >= 0 )
        {
            await fireBase.firestore().collection(collection).doc(sub.subID).set(obj)
        }   
    });

    return "Subscriptions To Movie Wos Deleted Successfully !"
}

// Exports
export default { getSubscriptionsToMember, deleteSubscriptionForMovie,getSubscriptions,getSubscriptionByID,addSubscription,deleteSubscriptionForMember,editSubscription};
