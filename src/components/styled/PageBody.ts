import styled from 'styled-components';

interface PageBodyProps {
   flex?: string
   justify?: string
   alignItems?: string
}

export const PageBody = styled.div<PageBodyProps>`
   flex: ${props => props.flex || '1 1 auto'};
   display: flex;
   flex-direction: column;
   justify-content: ${props => props.justify || 'flex-start'};
   align-items: ${props => props.alignItems || 'stretch'};
`;