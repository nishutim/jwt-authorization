import React from "react";
import { ContentContainer, StyledContent } from "./style";
import ContentRouter from "../../router/ContentRouter";

const Content = () => (
   <StyledContent>
      <ContentContainer>
         <ContentRouter />
      </ContentContainer>
   </StyledContent>
)

export default Content;