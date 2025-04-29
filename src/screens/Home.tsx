import React from 'react'
import '../style/Home.css'
import { Box, CircularProgress, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LoginFormProps } from '../data/interfaces/login'
import { LoginForm } from '../components/forms/Login'
import { useQuery } from '@tanstack/react-query'
import Condominium from '../data/models/condominium'
import { CondominiumItem } from '../components/CondominiumItem'
import { ICondominium } from '../data/interfaces/condominium'
import { Header } from '../components/Header'
import Logo from '../assets/logo.png'

function Home() {
  const { t } = useTranslation()
  const [selectedItem, setSelectedItem] = React.useState<ICondominium>()

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
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <Header />
      </Box>

      <Box
        sx={{
          padding: 2,
          display: 'flex',
          height: '100%',
          width: '100%',
          boxSizing: 'border-box',
          overflow: 'hidden',
          flexDirection: 'column',
          pt: '15svh',
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
            <Stack
              sx={{
                width: '30svw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '20svh',
              }}
            >
              <img src={Logo} width={'50%'} alt="Logo" />
            </Stack>

            <LoginForm
              methods={methods}
              condominium={selectedItem}
              onSubmit={methods.handleSubmit((values) => handleSubmit(values))}
            />
          </Stack>

          <Stack
            sx={{
              width: '70%',
              height: '80svh',
              overflowY: 'auto',
              flexFlow: 'row wrap',
              alignItems: 'center',
              justifyContent: 'center',
              mt: '-5svh',
              pt: '5svh',
              pb: '10svh',
            }}
          >
            {isLoading ? (
              <CircularProgress />
            ) : (
              data?.map((condominium) => (
                <CondominiumItem
                  key={condominium.id}
                  condominium={condominium}
                  onPress={setSelectedItem}
                  isSelected={selectedItem?.id === condominium.id}
                />
              ))
            )}
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default Home
