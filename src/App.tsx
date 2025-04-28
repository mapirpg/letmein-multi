import './App.css'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LoginFormProps } from './data/interfaces/login'
import { LoginForm } from './components/forms/Login'
import { useQuery } from '@tanstack/react-query'
import Condominium from './data/models/condominium'
import { CondominiumItem } from './components/forms/CondominiumItem'

function App() {
  const { t } = useTranslation()

  const { data, isLoading } = useQuery({
    queryKey: ['condominiums'],
    queryFn: Condominium.getCondominiums,
  })

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
        flexDirection: 'column',
      }}
    >
      <Stack border="1px solid #ccc" padding={2}>
        <Typography>{t('multi_condominiums')}</Typography>
      </Stack>

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

        <Stack
          sx={{
            width: '70%',
            height: '90svh',
            overflowY: 'auto',
            flexFlow: 'row wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            data?.map((condominium) => (
              <CondominiumItem condominium={condominium} />
            ))
          )}
        </Stack>
      </Stack>
    </Box>
  )
}

export default App
