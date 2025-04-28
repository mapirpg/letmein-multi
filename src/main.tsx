import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import theme from './theme'
import { ThemeProvider } from '@mui/material'
const queryClient = new QueryClient()
import Router from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </StrictMode>
)
