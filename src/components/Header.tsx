import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <Stack
      sx={() => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        height: '15svh',
        zIndex: 100,
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        width: '100%',
      })}
    >
      <Typography
        color="background.default"
        textAlign="center"
        variant="h4"
        fontWeight="bold"
      >
        {t('multi_condominiums')}
      </Typography>
    </Stack>
  )
}
