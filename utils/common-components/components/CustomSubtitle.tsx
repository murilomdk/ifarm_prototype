import React from 'react';
import {Text} from "react-native-paper";
import {theme} from "../../styles/theme";

interface Props {
    text: string;
    style?: {}
    color?: string
    children?: React.ReactNode;
}

export const CustomSubtitle : React.FC<Props> = ({ text, style, color=  theme.colors.textPrimary , children }) => {

    return (
        <Text variant="titleLarge" style={{...style, textAlign: 'center', color}}>
            {text}
            {children}
        </Text>
    );

}
