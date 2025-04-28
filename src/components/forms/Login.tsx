import { Controller, UseFormReturn } from 'react-hook-form'
import { LoginFormProps } from '../../data/interfaces/login'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const LoginForm = ({
  methods,
  onSubmit,
}: {
  methods: UseFormReturn<LoginFormProps, unknown, LoginFormProps>
  onSubmit: () => void
}) => {
  const { t } = useTranslation()

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
            autoComplete="off"
            size="small"
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
            autoComplete="off"
            size="small"
          />
        )}
      />
      <Button variant="contained" onClick={onSubmit}>
        {t('login')}
      </Button>
    </>
  )
}
