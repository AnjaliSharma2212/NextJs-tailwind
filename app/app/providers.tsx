'use client'
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import createEmotionCache from "./lib/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { theme } from "./theme/theme";


export default function Providers({children}: {children:React.ReactNode}){
    const [emotionCache]= useState(()=> createEmotionCache())
    return(
        <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
        </ThemeProvider>
        </CacheProvider>
    )
}