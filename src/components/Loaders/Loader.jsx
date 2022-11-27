import React from "react";

import { DotSpinner } from "@uiball/loaders";

function Loader() {
  return <DotSpinner size={128} speed={3} color="orange" textAlign= 'center' top= "50%" left= "50%" transform= "translate(-50%, -50%)" />; //centrar spinner
}

export default Loader;