import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    color?: string;
}

export const CustomLabel : React.FC<Props> = ({ text, color = '#27212B' }) => {

    return (
        <Text variant="labelSmall" style={{color}}>
            {text}
        </Text>
    );

}
