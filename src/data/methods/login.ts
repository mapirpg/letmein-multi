import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { LoginFormProps } from '../../data/interfaces/login'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Condominium from '../models/condominium'

export const useLoginMethods = () => {
  const { t } = useTranslation()

  const [search, setSearch] = React.useState<string>('')

  const { data, isLoading } = useQuery({
    queryKey: ['condominiums'],
    queryFn: Condominium.getCondominiums,
    select: (data) =>
      search
        ? data.filter((condominium) =>
            condominium?.name?.toLowerCase().includes(search.toLowerCase())
          )
        : data,
  })

  const validationSchema = z.object({
    email: z
      .string()
      .email({ message: t('invalid_email') })
      .min(1, { message: t('email_required') }),
    password: z.string().min(6, { message: t('password_min_length') }),
  })

  const submit = async (data: LoginFormProps) => {
    console.log('Form submitted:', data)
  }

  const methods = useForm<LoginFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  })

  return {
    submit,
    search,
    setSearch,
    isLoading,
    condominiums: data,
    ...methods,
  }
}
