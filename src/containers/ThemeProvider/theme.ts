import media from './media';
import { Media } from './types';

const theme = {
    borderRadius: {
        default: 4
    },
    boxShadow: {
        small: `0px 1px 5px rgba(24, 17, 3, 0.2), 
                0px 3px 4px rgba(0, 0, 0, 0.12), 
                0px 2px 4px rgba(24, 17, 3, 0.14)`,
        medium: `0px 11px 15px rgba(9, 9, 9, 0.2), 
                 0px 9px 46px rgba(9, 9, 9, 0.12), 
                 0px 24px 38px rgba(9, 9, 9, 0.14)`
    },
    letterSpacing: {
        small: "0.5px",
        medium: "1px",
        large: "1.5px"
    },
    media: media as Media,
    palette: {
        common: {
            black: "#000000",
            white: "#ffffff"
        },
        gray: {
            primary: "#E5E5E5",
            secondary: "#6B6B6B"
        },
        primary: "#F0B323",
        secondary: "#FF009D",
        tertiary: "#F5B324"
    },
    spacing: {
        xsmall: 8,
        small: 16,
        medium: 24,
        large: 32,
        xlarge: 64,
    },
    typography: {
        fontFamily: {
            primary: '"Futura PT", Arial, sans-serif'
        }
    }
};

export type Theme = typeof theme;

export default theme;