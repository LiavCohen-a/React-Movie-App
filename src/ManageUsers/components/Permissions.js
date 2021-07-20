// Modules
import { useEffect, useState } from "react";
import PermissionsRequest from "../../Services/PermissionsRequest";

//Components
import PerInput from "./PerInput";

function UserPerComp(props) {
  const [permissions, setPer] = useState([]);
  const [userPermissions, setUserPer] = useState([]);

  useEffect( () => {
    async function getData(){
      let response = await PermissionsRequest.getAllPermissions();
      setPer(response);
      if(props.userPer)
      {
        setUserPer(props.userPer)
      }
    }
    getData();
  });
  

  let addPermissions = async (e) => {
    let tempArr = userPermissions;

    if (e.target.checked) {
        tempArr.push(e.target.value);
        setUserPer(tempArr);
    } else {
      let index = tempArr.findIndex((x) => x == e.target.value);
      tempArr.splice(index, 1);
      setUserPer(tempArr);
    }
    props.getUserPermissions(userPermissions)
  };

  return (
    <div>
      {permissions.map((per, index) => {
        let arr = [];
        let been = false;
        let result = props.userPer?.map((userPer, index2) => {
          if (per == userPer ) {
            been = true;    
              return <PerInput
                key={index2}
                per={per}
                checked={true}
                callback={(e) => addPermissions(e)}
              />
          }          
        });
        arr.push(result);
        if (been != true) {
            been = true
          arr.push(<PerInput  key={index}  per={per}  checked={false}  callback={(name) => addPermissions(name)} />) 
        }
        return arr;
      })}
    </div>
  );
}

export default UserPerComp;
