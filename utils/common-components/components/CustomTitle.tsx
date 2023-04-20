import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    color: any;
}

export const CustomTitle : React.FC<Props> = ({ text, color }) => {

    return (
        <Text variant="titleLarge" style={{color: color}}>
            {text}
        </Text>
    );

}
