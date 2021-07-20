// Modules
import {connect} from "react-redux";

//Components
import LinkComp from './appRoot/Link';
import SwitchComp from './appRoot/Switch';

function App(props) {
  let name;
  let links;
  if(props.data)
  {
    name = <span> {props.data.userName} </span>
    links = <div> <LinkComp /> </div>
  }
  return (
    <div className="App">
      <h1>Movies - Subscriptions Web Site  {name} </h1>

      {links}
      
     <SwitchComp/>
      
    </div>
  );
}
const mapStateToProps = ( state ) =>{
  return { data : state}
}

export default connect(mapStateToProps)(App);;
