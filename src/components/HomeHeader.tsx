import { useTranslation } from 'react-i18next'
import SearchIcon from '@mui/icons-material/Search'
import { Stack, TextField, Typography } from '@mui/material'

export const HomeHeader = ({
  onSearch,
}: {
  onSearch?: (value: string) => void
}) => {
  const { t } = useTranslation()
  return (
    <Stack
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: `${theme.palette.primary.dark}d9`,
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

      <Stack
        sx={{
          width: '30%',
          right: '2svw',
          position: 'absolute',
        }}
      >
        <TextField
          type="search"
          variant="outlined"
          slotProps={{
            input: {
              sx: ({ palette }) => ({
                color: palette.background.default,
              }),
              startAdornment: (
                <SearchIcon
                  sx={{
                    color: 'background.default',
                    mr: 1,
                  }}
                />
              ),
            },
          }}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </Stack>
    </Stack>
  )
}
