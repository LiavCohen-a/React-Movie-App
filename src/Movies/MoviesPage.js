// Modules
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Components
import UsersSwitch from './root/Switch';
import UsersLink from './root/Link';


function MoviesPageComp() {


  return (
    <div>
      
      <h3> Movies Page </h3>
          
      <UsersLink />
      <UsersSwitch />
    </div>
  );
}

export default MoviesPageComp;
