import { DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        /**
         * This is the primary color
         */
        primary: '#296e11',
        /**
         * This is the secondary color
         */
        accent: '#D96C00',
        background: '#b9b9b9',
        /**
         * Background color used on cards
         */
        surface: '#f10505',
        onSurface: '#DEDEDE',
        text: '#222',
        disabled: '#13d5d5',
        error: '#FF0079',
        placeholder: '#c91f1f',
        backdrop: '#ef0f0f',
        notification: '#3f382f',
        white: '#9f8720',
        borderColor: '#ea0a0a'



    },

};
