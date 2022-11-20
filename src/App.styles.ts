import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.color.bg};
    color: ${({ theme }) => theme.color.text};
    min-height: 100vh;
    transition: all .5s ease;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 10px;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.color.text};
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;    
    transition: all .5s ease;
`