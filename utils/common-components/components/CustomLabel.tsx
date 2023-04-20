import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    color: any;
}

export const CustomLabel : React.FC<Props> = ({ text, color }) => {

    return (
        <Text variant="labelSmall" style={{color: color}}>
            {text}
        </Text>
    );

}
