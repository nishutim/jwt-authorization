import React, { FC } from "react";
import { StyledGlobalError } from "./style";

interface Props {
   error: string
}

const GlobalError: FC<Props> = React.memo(({ error }) => {
   return (
      <StyledGlobalError>{error}</StyledGlobalError>
   );
})

export default GlobalError;