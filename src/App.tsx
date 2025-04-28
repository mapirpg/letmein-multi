import './App.css'
import { Box, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LoginFormProps } from './data/interfaces/login'
import { LoginForm } from './components/forms/Login'

function App() {
  const { t } = useTranslation()

  const validationSchema = z.object({
    email: z
      .string()
      .email({ message: t('invalid_email') })
      .min(1, { message: t('email_required') }),
    password: z.string().min(6, { message: t('password_min_length') }),
  })

  const handleSubmit = async (data: LoginFormProps) => {
    console.log('Form submitted:', data)
  }

  const methods = useForm<LoginFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  })

  return (
    <Box
      sx={{
        padding: 2,
        display: 'flex',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Stack
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Stack
          sx={{
            padding: 2,
            width: '30%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LoginForm
            methods={methods}
            onSubmit={methods.handleSubmit((values) => handleSubmit(values))}
          />
        </Stack>
        <Typography>{t('multi_condominiums')}</Typography>
      </Stack>
    </Box>
  )
}

export default App
