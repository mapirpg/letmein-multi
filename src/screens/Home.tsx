import '../style/Home.css'
import { useTranslation } from 'react-i18next'
import { Box, CircularProgress, Fade, Stack, Typography } from '@mui/material'

import Logo from '../assets/logo.png'
import { Container } from '../components/Container'
import { HomeHeader } from '../components/HomeHeader'
import { LoginForm } from '../components/forms/Login'
import { useLoginMethods } from '../data/methods/login'
import Background from '../assets/login_background.jpg'
import { CondominiumItem } from '../components/CondominiumItem'

function Home() {
  const { t } = useTranslation()
  const {
    setSearch,
    condominiums,
    isLoading,
    onSubmit,
    selectedCondominium,
    setSelectedCondominium,
    ...methods
  } = useLoginMethods()

  return (
    <Container>
      <Box
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <HomeHeader onSearch={setSearch} />
      </Box>

      <Box
        sx={({ palette: { background } }) => ({
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: -1,
          width: '66svw',
          height: '100%',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to right, ${background.default} 0%, transparent 30%)`,
            pointerEvents: 'none',
          },
        })}
      >
        <img
          src={Background}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
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
              onSubmit={onSubmit}
              showSelectedCondominium
              condominium={selectedCondominium}
              forgotPasswordProps={{
                sx: {
                  left: '5svw',
                  bottom: '5svh',
                  position: 'absolute',
                },
              }}
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
              <CircularProgress
                sx={{
                  color: 'background.default',
                }}
              />
            ) : !condominiums?.length ? (
              <Typography
                textAlign={'right'}
                variant="h3"
                color="background.default"
              >
                {t('no_condominiums_found')}
              </Typography>
            ) : (
              <Fade key={String(isLoading)} in timeout={1000}>
                <Stack
                  sx={{
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {condominiums?.map((condominium) => (
                    <CondominiumItem
                      key={condominium.id}
                      condominium={condominium}
                      onPress={setSelectedCondominium}
                      isSelected={selectedCondominium?.id === condominium.id}
                    />
                  ))}
                </Stack>
              </Fade>
            )}
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export default Home
