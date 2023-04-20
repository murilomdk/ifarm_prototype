import React from 'react';
import {TextInput} from "react-native-paper";
import {theme} from "../../styles/theme";

interface Props {
    disabled?: boolean,
    style?: {}
}

export const CustomInput : React.FC<Props> = ({ disabled, style}) => {

    return (
        <TextInput mode="outlined" activeOutlineColor={theme.colors.primary} outlineStyle={{borderRadius: 10}} editable={disabled} style={{
            ...style,
            backgroundColor: "#ffffff",
            borderColor: "#D0D0D0"}}>
    </TextInput>
);

}
