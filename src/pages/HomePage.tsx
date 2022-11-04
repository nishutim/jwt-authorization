import React from "react";
import { Page, PageBody } from "../components/styled";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

const HomePage = () => {
   return (
      <Page>
         <PageBody>
            <Header />
            <Content />
         </PageBody>
      </Page>
   );
}

export default HomePage;