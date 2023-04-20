import { DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#63B453',
        backgroundPrimary: '#ffffff',
        backgroundSecondary: 'rgba(99, 180, 83, 0.05)',
        border: '#D0D0D0',
        textPrimary: '#27212B',
        textSecondary: '#939095',
        textTertiary: '#ffffff',
        disabled: '#D0D0D0',
        error: '#f10505',
    },
    size: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
        xr: 40,
        xm: 20,
    }
};
