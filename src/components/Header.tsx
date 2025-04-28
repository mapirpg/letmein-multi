import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/logo.png'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <Stack
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${theme.palette.primary.main}CC`,
        backdropFilter: 'blur(10px)',
        height: '15svh',
        zIndex: 100,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        width: '100%',
      })}
    >
      <Typography
        color="#000"
        textAlign="center"
        variant="h5"
        fontWeight="bold"
      >
        {t('multi_condominiums')}
      </Typography>
      <Stack
        sx={{
          left: '10%',
          position: 'absolute',
        }}
      >
        <img src={Logo} width={'20%'} alt="Logo" />
      </Stack>
    </Stack>
  )
}
