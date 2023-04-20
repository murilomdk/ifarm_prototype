import React from 'react';
import {Text} from "react-native-paper";
import {theme} from "../../styles/theme";
import {VariantProp} from "react-native-paper/lib/typescript/src/components/Typography/types";

interface Props {
    text?: string;
    variant?: VariantProp<string>;
    style?: {};
    color?: string;
    children?: React.ReactNode;
}

export const CustomLabel : React.FC<Props> = ({ text,
                                                  variant = 'labelSmall',
                                                  style,
                                                  color = theme.colors.textPrimary,
                                                  children}) => {
    return (
        <Text variant={variant} style={{
            ...style,
            color}}>
        {text}
        {children}
        </Text>
    );

}
