import React from 'react'
import styled from 'styled-components/native'

type PropsType = {
    backgroundColor: string
    height?: number
    width?: number
}

export const CentralizedView = styled.View`
    background-color: ${(props: PropsType) => `${props.backgroundColor}`};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props: PropsType) => `${props.height}`};
    width: ${(props: PropsType) => `${props.width}`};
`