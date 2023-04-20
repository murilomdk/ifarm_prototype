import React from 'react';
import {Button} from "react-native-paper";

interface Props {
    mode: 'contained' | 'outlined';
    onPress: () => void;
    texto: string;
    bgColor: any;
}


export const CustomButton: React.FC<Props> = ({ mode, onPress, texto, bgColor }) => {

    return (
        <Button mode={mode} onPress={onPress} style={{backgroundColor: bgColor}}>
            {texto}
        </Button>
    );

}
