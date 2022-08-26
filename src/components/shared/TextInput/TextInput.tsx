import styled from "styled-components/native";
import { theme } from "../../../theme";

type PropTypes = {
    focused: boolean
    error: boolean
}

const TextInput = styled.TextInput`
    width: 80%;
    height: 48px;
    border: 1px solid ${(props: PropTypes) => props.focused ? props.error ? theme.pallete.error.main : theme.pallete.primary.main : props.error ? theme.pallete.error.main : theme.pallete.black.main};
    margin-top: 15px;
    border-radius: 15px;
    padding-left: 15px;
    padding-right: 15px
`

export { TextInput }