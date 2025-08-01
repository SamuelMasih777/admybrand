// lib/mui-theme.ts
'use client'

import { createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
  palette: {
    mode: 'light', // you can toggle with 'dark'
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f9fafb',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, sans-serif',
  },
})
