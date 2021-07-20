// Modules
import { Link } from "react-router-dom";

function SubscriptionComp(props) {


  return (
    <div >

    <Link to={"/Subscriptions/MemberPage/" + props.Member.memberId } > {props.Member.memberName}  </Link> ,  {props.Member.date}

    </div> 
  );
}

export default SubscriptionComp;
