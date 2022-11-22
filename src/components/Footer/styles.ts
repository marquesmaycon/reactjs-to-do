import styled from 'styled-components';

export const Footer = styled.footer`
   background-color: ${({ theme })=> theme.color.bgArea2};
   padding: 15px;
   border-radius: 15px;
   margin-block: 10px;
   text-align: center;

   a {
      text-decoration: none;
      color: ${({ theme })=> theme.color.text};
      font-weight: bold;
      transition: all ease .3s;

      &:hover {
         color: ${({ theme })=> theme.color.bgInput};
      }
   }
`