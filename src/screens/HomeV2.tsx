import {
  Autocomplete,
  Box,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Container } from '../components/Container'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/logo.png'
import Background from '../assets/login_background.jpg'
import { useLoginMethods } from '../data/methods/login'
import { LoginForm } from '../components/forms/Login'
import React from 'react'
import { ICondominium } from '../data/interfaces/condominium'

function HomeV2() {
  const { t } = useTranslation()
  const { condominiums, submit, ...methods } = useLoginMethods()
  const [selectedItem, setSelectedItem] = React.useState<ICondominium>()

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
              methods={methods}
              condominium={selectedItem}
              onSubmit={methods.handleSubmit((values) => submit(values))}
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
            />
          </Stack>
          <Link mt={6}>{t('forgot_password')}</Link>
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

          <Autocomplete
            options={condominiums || []}
            getOptionLabel={(option) => option.name}
            sx={{
              width: '30svw',
              '& .MuiSvgIcon-root': {
                color: 'background.default',
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t('condominium')}
                variant="outlined"
                sx={{
                  width: '30svw',
                  marginTop: '5svh',
                  '& .MuiInputBase-root': {
                    backgroundColor: 'transparent',
                  },
                  '& .MuiInputBase-input': {
                    color: 'background.default',
                  },
                  '& .MuiInputBase-input::placeholder': {
                    color: 'background.default',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'background.default',
                  },
                }}
              />
            )}
            onChange={(_, value) => value && setSelectedItem(value)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default HomeV2
