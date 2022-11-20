import * as C from './styles'

type Props = {
    text: string,
    switchTheme: () => void
}

export const SwitchThemeBtn = ({text, switchTheme }: Props) => {
    return (
        <C.Container>
            <button onClick={switchTheme}>
                {text}
            </button>
        </C.Container>
    )
}