import {
  Fade,
  Stack,
  Button,
  useTheme,
  TextField,
  Typography,
  ButtonProps,
  TextFieldProps,
  Autocomplete,
  Link,
  LinkProps,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import { UseLoginMethodsProps } from '../../data/methods/login'
import { ICondominium } from '../../data/interfaces/condominium'

export const LoginForm = ({
  methods,
  onSubmit,
  condominium,
  buttonProps,
  condominiums,
  emailInputProps,
  passwordInputProps,
  forgotPasswordProps,
  setSelectedCondominium,
  showSelectedCondominium,
  includeSelectedCondominium,
}: {
  onSubmit: () => void
  buttonProps?: ButtonProps
  condominium?: ICondominium
  emailInputProps?: TextFieldProps
  showSelectedCondominium?: boolean
  passwordInputProps?: TextFieldProps
  methods: Partial<UseLoginMethodsProps>
  setSelectedCondominium?: React.Dispatch<
    React.SetStateAction<ICondominium | undefined>
  >
  includeSelectedCondominium?: boolean
  condominiums?: ICondominium[]
  forgotPasswordProps?: LinkProps
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
            error={!!methods?.formState?.errors.email}
            helperText={methods?.formState?.errors.email?.message}
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
            error={!!methods?.formState?.errors.password}
            helperText={methods?.formState?.errors.password?.message}
            {...defaultInputProps}
            {...passwordInputProps}
          />
        )}
      />

      {includeSelectedCondominium && (
        <Autocomplete
          options={condominiums || []}
          getOptionLabel={(option) => option.name}
          onChange={(_, value) => setSelectedCondominium?.(value || undefined)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={t('condominuim')}
              variant="outlined"
              size="medium"
            />
          )}
        />
      )}

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
      <Link alignSelf={'center'} mt={6} {...forgotPasswordProps}>
        {t('forgot_password')}
      </Link>
    </>
  )
}
