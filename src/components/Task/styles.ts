import styled from 'styled-components';

type ContainerProps = {
    done: boolean
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    background-color: ${({ theme }) => theme.color.bgInput};
    padding: 10px;
    border-radius: 10px;
    margin-block: 10px;
    align-items: center;
    font-size: 20px;
    transition: all .5s ease;

    input {
        width: 25px;
        height: 25px;
        margin-right: 9px;
    }

    label {
        color: ${({ theme }) => theme.color.text};
        text-decoration: ${({ done }) => done ? 'line-through' : 'initial'}
    }
`