import React from 'react';
import {TextInput} from "react-native-paper";
import {theme} from "../../styles/theme";

interface Props {
    value?: string
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined
    onChangeText?: (argument: any) => void
    disabled?: boolean,
    style?: {},
    placeholder?: string,
}

export const CustomInput : React.FC<Props> = ({
                                                  disabled,
                                                  style,
                                                  placeholder,
                                                  autoCapitalize = 'none',
                                                  onChangeText}) => {

    return (
        <TextInput placeholder={placeholder}
                   onChangeText={onChangeText}
                   mode="outlined"
                   activeOutlineColor={theme.colors.primary}
                   outlineStyle={{borderRadius: 10}}
                   editable={disabled}
                   autoCapitalize={autoCapitalize}
                   style={{
                       ...style,
                       backgroundColor: "#ffffff",
                       borderColor: "#D0D0D0"}}
        >
    </TextInput>
);

}
