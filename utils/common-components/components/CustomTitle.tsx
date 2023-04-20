import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    style: {}
}

export const CustomTitle : React.FC<Props> = ({ text, style }) => {

    return (
        <Text variant="headlineLarge" style={{...style, textAlign: 'center', color: '#27212B'}}>
            {text}
        </Text>
    );

}
