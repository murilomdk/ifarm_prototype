import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    style: {}
}

export const CustomLabel : React.FC<Props> = ({ text, style}) => {

    return (
        <Text variant="labelSmall" style={{...style, textAlign: 'center', color: '#27212B'}}>
            {text}
        </Text>
    );

}
