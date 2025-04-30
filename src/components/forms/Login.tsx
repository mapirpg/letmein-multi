import { Controller, UseFormReturn } from 'react-hook-form'
import { LoginFormProps } from '../../data/interfaces/login'
import {
  Button,
  ButtonProps,
  Fade,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ICondominium } from '../../data/interfaces/condominium'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export const LoginForm = ({
  methods,
  onSubmit,
  condominium,
  buttonProps,
  emailInputProps,
  passwordInputProps,
  showSelectedCondominium,
}: {
  onSubmit: () => void
  condominium?: ICondominium
  methods: UseFormReturn<LoginFormProps, unknown, LoginFormProps>
  buttonProps?: ButtonProps
  emailInputProps?: TextFieldProps
  passwordInputProps?: TextFieldProps
  showSelectedCondominium?: boolean
}) => {
  const { t } = useTranslation()
  const {
    palette: { primary },
  } = useTheme()

  const defaultInputProps: Partial<TextFieldProps> = {
    autoComplete: 'off',
    size: 'small',
    sx: {
      marginBottom: 2,
    },
  }

  return (
    <>
      <Controller
        control={methods.control}
        name="email"
        render={({ field }) => (
          <TextField
            fullWidth
            label={t('email')}
            variant="outlined"
            {...field}
            error={!!methods.formState.errors.email}
            helperText={methods.formState.errors.email?.message}
            {...defaultInputProps}
            {...emailInputProps}
          />
        )}
      />

      <Controller
        control={methods.control}
        name="password"
        render={({ field }) => (
          <TextField
            fullWidth
            label={t('password')}
            variant="outlined"
            {...field}
            error={!!methods.formState.errors.password}
            helperText={methods.formState.errors.password?.message}
            {...defaultInputProps}
            {...passwordInputProps}
          />
        )}
      />

      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          mt: 2,
        }}
      >
        {condominium && showSelectedCondominium ? (
          <Stack
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                color: primary.dark,
              }}
            />
            <Fade key={condominium?.id} in timeout={2000}>
              <Typography
                variant="h6"
                color="primary.dark"
                sx={{
                  wordBreak: 'break-word',
                  maxWidth: '60%',
                  flexShrink: 1,
                }}
              >
                {condominium?.name}
              </Typography>
            </Fade>
          </Stack>
        ) : (
          <Stack />
        )}

        <Button
          variant="contained"
          sx={{
            minWidth: '40%',
            ...buttonProps?.sx,
          }}
          {...buttonProps}
          onClick={onSubmit}
        >
          {t('to_enter')}
        </Button>
      </Stack>
    </>
  )
}
