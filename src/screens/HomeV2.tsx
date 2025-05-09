import { Box, Fade, Stack, Typography, CircularProgress } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Logo from '../assets/logo.png'
import { Container } from '../components/Container'
import { LoginForm } from '../components/forms/Login'
import Background from '../assets/login_background.jpg'
import { useLoginMethods } from '../data/methods/login'
import { CondominiumsAutocomplete } from '../components/CondominiumsAutocomplete'

function HomeV2() {
  const { t } = useTranslation()
  const {
    onSubmit,
    isLoading,
    condominiums,
    selectedCondominium,
    setSelectedCondominium,
    ...methods
  } = useLoginMethods()

  return (
    <Container>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Stack
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={Logo} width={'50%'} alt="Logo" />
          <Stack sx={{ width: '60%' }}>
            <Typography variant="h4" mb={4} mt={6}>
              {t('login')}
            </Typography>

            <LoginForm
              buttonProps={{
                sx: {
                  width: '100%',
                },
              }}
              emailInputProps={{
                size: 'medium',
              }}
              passwordInputProps={{
                size: 'medium',
              }}
              methods={methods}
              onSubmit={onSubmit}
              condominium={selectedCondominium}
            />
          </Stack>
        </Stack>

        <Stack
          sx={{
            width: '50%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: `url(${Background}) `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Box
            sx={{
              textAlign: 'left',
              marginLeft: '5svw',
              marginTop: '10svh',
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              color="background.default"
              display="inline"
            >
              {`${t('welcome_to')} `}
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="primary.dark"
              display="inline"
            >
              {t('brand_multi_condominiums')}
            </Typography>

            <Typography color="background.default" variant="h5" mt={6}>
              {t('select_condomínio_want_access')}
            </Typography>
          </Box>

          {isLoading ? (
            <Stack
              sx={{
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CircularProgress
                sx={{
                  color: 'background.default',
                }}
              />
            </Stack>
          ) : (
            <Fade key={String(isLoading)} in timeout={500}>
              <CondominiumsAutocomplete
                condominiums={condominiums}
                selectedItem={selectedCondominium}
                setSelectedItem={setSelectedCondominium}
              />
            </Fade>
          )}
        </Stack>
      </Box>
    </Container>
  )
}

export default HomeV2
