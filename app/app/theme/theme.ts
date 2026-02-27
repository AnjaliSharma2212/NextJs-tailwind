import { createTheme } from "@mui/material";

export  const theme= createTheme({
    palette:{
        primary:{
            main:"#0a0b2b"
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    borderRadius:12
                },
            },
        },
    }
})