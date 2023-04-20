import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    color?: any;
}

export const CustomSubtitle : React.FC<Props> = ({ text, color = '#27212B' }) => {

    return (
        <Text variant="headlineLarge" style={{color, textAlign: 'center'}}>
            {text}
        </Text>
    );

}
