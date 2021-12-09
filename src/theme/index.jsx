//importamos las dependencias de ui para crear el tema
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    //colores, fuentes, espacios, sombras
    palette: {
        primary: {
            light: "#ECAD04",
            main: "#ff3d00",
            dark: "#b22a00"
        },
        secondary: {
            main: "#F5B925"
        },
        tertiary: {
            main: "#DF0000"
        }
    } 
});
export default theme;