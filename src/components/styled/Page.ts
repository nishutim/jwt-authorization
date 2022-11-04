import styled from "styled-components";

interface PageProps {
   flex?: string
}

export const Page = styled.div<PageProps>`
   flex: ${props => props.flex || '1 1 auto'};
   display: flex;
   flex-direction: column;
`;