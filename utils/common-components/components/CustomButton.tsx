import React from 'react';
import {Button} from "react-native-paper";
import {theme} from "../../styles/theme";

interface Props {
    mode: 'contained' | 'contained-tonal' | 'outlined';
    onPress: () => void;
    text: string;
    style?: {}
}

export const CustomButton: React.FC<Props> = ({ mode = 'contained', onPress, text, style}) => {

    return (
        <Button mode={mode}
                onPress={onPress}
                style={{...style,
                    backgroundColor: theme.colors.primary,
                    borderRadius: 10,
                    height: 46,
                    width: 144,
                    paddingTop: 2
        }}
                labelStyle={{
                    textAlignVertical: "center",
                    color: theme.colors.textTertiary,
                }}>
            {text}
        </Button>
    );

}
