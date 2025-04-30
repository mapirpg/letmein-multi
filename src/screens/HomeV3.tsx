import { Box, Fade, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import Logo from '../assets/logo.png'
import { Container } from '../components/Container'
import { LoginForm } from '../components/forms/Login'
import Background from '../assets/login_background.jpg'
import { useLoginMethods } from '../data/methods/login'

function HomeV3() {
  const { t } = useTranslation()
  const {
    onSubmit,
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
          <img src={Logo} width={'40%'} alt="Logo" />
          <Stack sx={{ width: '60%' }}>
            <Typography variant="h4" mb={4} mt={6}>
              {t('login')}
            </Typography>

            <LoginForm
              condominiums={condominiums}
              setSelectedCondominium={setSelectedCondominium}
              includeSelectedCondominium
              buttonProps={{
                sx: {
                  width: '100%',
                  mt: '5svh',
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
          </Box>

          {selectedCondominium && (
            <Fade key={selectedCondominium?.id} in timeout={1000}>
              <Stack
                sx={{
                  display: 'flex',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={selectedCondominium.image}
                  style={{
                    width: '50%',
                    borderRadius: '8px',
                  }}
                />
              </Stack>
            </Fade>
          )}
        </Stack>
      </Box>
    </Container>
  )
}

export default HomeV3
