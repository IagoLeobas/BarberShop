import React from 'react';
import { useTheme } from 'styled-components/native';
import * as S from './LoginScreen.styles';

export function LoginScreen() {
    const { COLORS } = useTheme();
    console.log({COLORS});
    return <S.Container />;
}