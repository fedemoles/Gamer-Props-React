import React from "react";

import { DotSpinner } from "@uiball/loaders";

function Loader() {
  return <div style={{width:'100%', height:'80vh', display:'flex', justifyContent:'center', alignItems:'center'}}><DotSpinner size={128} speed={3} color="orange" textAlign= 'center' top= "50%" left= "50%" transform= "translate(-50%, -50%)" /></div>; //centrar spinner
}

export default Loader;