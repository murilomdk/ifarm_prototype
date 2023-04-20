import React from 'react';
import {Text} from "react-native-paper";

interface Props {
    text: string;
    bgColor: any;
}


export const CustomText : React.FC<Props> = ({ text, bgColor }) => {

    return (
        <Text style={{backgroundColor: bgColor}}>
            {text}
        </Text>
    );

}
