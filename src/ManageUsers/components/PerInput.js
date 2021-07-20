// Modules
import { useEffect, useState } from "react";

//Css
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

//Components
function UserPerComp(props) {

  const [bool, setBool] = useState(false);
  const [tempArr, setArr] = useState([]);

  useEffect(() => {
    setBool(props.checked)
  }, [] );

  let setEvent = (e) => {
    setBool(!bool)

    props.callback(e)
  }

  return (
    <div>
      <FormControlLabel control={ <Checkbox value={props.per} checked={bool}  color="primary" onChange={(e) => setEvent(e)} />  }
        label={props.per} />  
    </div>
  );
}

export default UserPerComp;
