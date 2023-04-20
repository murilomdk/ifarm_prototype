import React from 'react';
import {Text} from "react-native-paper";
import {theme} from "../../styles/theme";

interface Props {
    text?: string;
    style?: {};
    color?: string;
    children?: React.ReactNode;
}

export const CustomLabel : React.FC<Props> = ({ text, style, color = theme.colors.textPrimary, children}) => {

    return (
        <Text variant="labelSmall" style={{...style, color}}>
            {text}
            {children}
        </Text>
    );

}
