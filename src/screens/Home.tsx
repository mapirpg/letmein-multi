import React from 'react'
import '../style/Home.css'
import { Box, CircularProgress, Stack } from '@mui/material'

import { LoginForm } from '../components/forms/Login'
import { CondominiumItem } from '../components/CondominiumItem'
import { ICondominium } from '../data/interfaces/condominium'
import { HomeHeader } from '../components/HomeHeader'
import Logo from '../assets/logo.png'
import Background from '../assets/login_background.jpg'
import { Container } from '../components/Container'
import { useLoginMethods } from '../data/methods/login'

function Home() {
  const { submit, setSearch, condominiums, isLoading, ...methods } =
    useLoginMethods()
  const [selectedItem, setSelectedItem] = React.useState<ICondominium>()

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
              showSelectedCondominium
              condominium={selectedItem}
              onSubmit={methods.handleSubmit((values) => submit(values))}
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
              condominiums?.map((condominium) => (
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
    </Container>
  )
}

export default Home
