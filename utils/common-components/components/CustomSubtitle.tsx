import React from 'react';
import {Text} from "react-native-paper";
import {theme} from "../../styles/theme";
import {VariantProp} from "react-native-paper/lib/typescript/src/components/Typography/types";

interface Props {
    text: string;
    variant?: VariantProp<string>;
    style?: {};
    color?: string;
    children?: React.ReactNode;
}

export const CustomSubtitle : React.FC<Props> = ({
                                                     text,
                                                     variant = 'titleLarge',
                                                     style,
                                                     color=  theme.colors.textPrimary ,
                                                     children }) => {
    return (
        <Text variant={variant}
              style={{...style, textAlign: 'center', color}}>
            {text}
            {children}
        </Text>
    );

}
