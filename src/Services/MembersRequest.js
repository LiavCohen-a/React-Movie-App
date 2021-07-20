// Imports
import fireBase from '../FireBase/connection/fireBase';

// Variables
let collection = "Members";

// Functions

let getMembers =async () => {
    const members = [];
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(member =>{
                let memberObj = {
                    MemberId : member.id ,
                    Name : member.data().Name ,
                    Email : member.data().Email , 
                    City : member.data().City ,
                }
                members.push(memberObj);
                })
    return members;
}

let getMember =async (id) => {
    let memberData = {};
    let data = await fireBase.firestore().collection(collection).get()
    data.forEach(member =>{
                if(member.id == id)
                {
                    memberData = member.data();
                }
                })
    return memberData;
}

let addMember =async (newMemberData) => {
    await fireBase.firestore().collection(collection).add(newMemberData);
    return "Member Was Created !"
}

let editMember = async (id,newMemberData) => {
    await fireBase.firestore().collection(collection).doc(id).set(newMemberData)
    return "Member Was Updated !"
}

let deleteMember =async (id) => {
    await fireBase.firestore().collection(collection).doc(id).delete()
    return "Member Was Deleted !"

}
// Exports
export default { getMembers,getMember,addMember,deleteMember,editMember};
