// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import SubsSwitch from './root/Switch';
import SubsLink from './root/Link';


function MoviesPageComp() {


  return (
    <div>
      
      <h3> Subscriptions Page </h3>
          
      <SubsLink />
      <SubsSwitch />
    </div>
  );
}

export default MoviesPageComp;
