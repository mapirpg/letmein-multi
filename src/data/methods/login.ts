import React from 'react'
import { z } from 'zod'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormReturn, useForm } from 'react-hook-form'

import Condominium from '../models/condominium'
import { ICondominium } from '../interfaces/condominium'
import { LoginFormProps } from '../../data/interfaces/login'

export interface UseLoginMethodsProps extends UseFormReturn<LoginFormProps> {
  search: string
  isLoading: boolean
  onSubmit: () => void
  condominiums?: ICondominium[]
  setSearch: React.Dispatch<React.SetStateAction<string>>
  selectedCondominium?: ICondominium
  setSelectedCondominium: React.Dispatch<
    React.SetStateAction<ICondominium | undefined>
  >
}

export const useLoginMethods = (): UseLoginMethodsProps => {
  const { t } = useTranslation()

  const [search, setSearch] = React.useState<string>('')
  const [selectedCondominium, setSelectedCondominium] = React.useState<
    ICondominium | undefined
  >(undefined)

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
    search,
    setSearch,
    isLoading,
    condominiums: data,
    selectedCondominium,
    setSelectedCondominium,
    onSubmit: methods.handleSubmit(submit),
    ...methods,
  }
}
