import * as C from './styles';
import { BsPlusCircleFill } from "react-icons/bs";
import { KeyboardEvent, useState } from 'react';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    
    const [inputText, setInputText] = useState('');

    function handleKeyUp(e: KeyboardEvent) {
        if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className='image'><BsPlusCircleFill /></div>
            <input
                type="text"
                placeholder='Adicione uma tarefa...'
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}