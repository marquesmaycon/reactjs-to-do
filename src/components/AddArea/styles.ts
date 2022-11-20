import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image {
        font-size: 20px;
        margin-right: 10px;
    }

    input {
        border: 0;
        background-color: transparent;
        outline: 0;
        color: ${({ theme }) => theme.color.text};
        font-size: 20px;
        flex: 1;
    }
`