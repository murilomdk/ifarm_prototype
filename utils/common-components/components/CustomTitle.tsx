import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    color?: any;
}

export const CustomTitle : React.FC<Props> = ({ text, color = '#27212B' }) => {

    return (
        <Text variant="titleLarge" style={{color, textAlign: 'center'}}>
            {text}
        </Text>
    );

}
