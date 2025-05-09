import React from 'react'
import {
  Autocomplete,
  Box,
  Fade,
  Stack,
  StackProps,
  TextField,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import { ICondominium } from '../data/interfaces/condominium'

interface CondominiumsAutocompleteProps extends StackProps {
  condominiums?: ICondominium[]
  selectedItem?: ICondominium
  setSelectedItem?: React.Dispatch<
    React.SetStateAction<ICondominium | undefined>
  >
}

export const CondominiumsAutocomplete = ({
  condominiums,
  selectedItem,
  setSelectedItem,
  ...props
}: CondominiumsAutocompleteProps) => {
  const { t } = useTranslation()

  return (
    <Stack
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      {...props}
    >
      <Autocomplete
        options={condominiums || []}
        getOptionLabel={(option) => option.name}
        sx={{
          width: '30svw',
          '& .MuiSvgIcon-root': {
            color: 'background.default',
          },
        }}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                px: 2,
                overflow: 'auto',
                borderRadius: '4px',
              }}
            >
              <Typography>{option?.name}</Typography>
              <img
                width={40}
                src={option?.image}
                style={{
                  borderRadius: '4px',
                }}
              />
            </Box>
          </li>
        )}
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
        onChange={(_, newValue) => setSelectedItem?.(newValue || undefined)}
      />

      {selectedItem && (
        <Fade key={selectedItem?.id} in timeout={1000}>
          <Stack
            sx={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={selectedItem.image}
              style={{
                width: '30%',
                borderRadius: '8px',
              }}
            />
          </Stack>
        </Fade>
      )}
    </Stack>
  )
}
