import React from "react";
import { StyledPreloader } from "./style";

const Preloader = React.memo(() => {
   return (
      <StyledPreloader>Loading...</StyledPreloader>
   );
})

export default Preloader;