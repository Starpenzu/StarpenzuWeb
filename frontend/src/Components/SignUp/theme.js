import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    breakpoints:{
        values:{
            xs:0,
            sm:600
        }
    },

    shape:{
        borderRadius: 10
    },

    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#eb435d',
        },
        secondary: {
            // This is yellow as hex.
            main: '#F9B70B',
        }
    },

    typography: {
        fontFamily: 'poppins',
        fontSize: 10
    }
})

export default theme;