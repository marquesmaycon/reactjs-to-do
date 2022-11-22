import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    
    button {
        padding: 5px 10px;
        margin: auto;
        background-color: ${({ theme }) => theme.color.bgButton};
        color: ${({ theme }) => theme.color.textButton};
        border: 0;
        border-radius: 7.5px;
        transition: all ease .3s;
    }

    button:hover {
        border-radius: 15px;
    }
`