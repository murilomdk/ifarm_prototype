import React from 'react';
import {TextInput} from "react-native-paper";

interface Props {
    disabled?: boolean,
    style?: {}
}

export const CustomInput : React.FC<Props> = ({disabled, style}) => {

    return (
        <TextInput mode="outlined" activeOutlineColor="#63B453" outlineStyle={{borderRadius: 10}} editable={disabled} style={{
            ...style,
            backgroundColor: "#ffffff",
            borderColor: "#D0D0D0"}}>
    </TextInput>
);

}
