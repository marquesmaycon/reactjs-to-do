import styled from 'styled-components';

type ContainerProps = {
    done: boolean
}

export const Container = styled.div<ContainerProps>`

    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-block: 10px;
    align-items: center;
    font-size: 20px;

    input {
        width: 25px;
        height: 25px;
        margin-right: 9px;
    }

    label {
        color: #CCC;
        text-decoration: ${p => p.done ? 'line-through' : 'initial'}
    }
`