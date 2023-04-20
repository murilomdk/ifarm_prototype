import React from 'react';
import {Text} from "react-native-paper";
import {theme} from "../../styles/theme";

interface Props {
    text: string;
    style?: {}
    color?: string
    children?: React.ReactNode;
}

export const CustomTitle : React.FC<Props> = ({ text, style, color = theme.colors.textPrimary, children }) => {

    return (
        <Text variant="headlineLarge" style={{...style, textAlign: 'center', color}}>
            {text}
            {children}
        </Text>
    );

}
