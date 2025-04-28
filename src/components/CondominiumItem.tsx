import { Card, CardProps, Stack, Typography, useTheme } from '@mui/material'
import { ICondominium } from '../data/interfaces/condominium'

interface CondominiumItemProps extends CardProps {
  condominium: ICondominium
  onPress?: (item: ICondominium) => void
  isSelected?: boolean
}

export const CondominiumItem = ({
  condominium,
  onPress,
  isSelected,
  ...props
}: CondominiumItemProps) => {
  const {
    palette: { primary },
  } = useTheme()

  return (
    <Card
      onClick={(e) => {
        onPress?.(condominium)
        props?.onClick?.(e)
      }}
      key={condominium.id}
      sx={{
        margin: 4,
        padding: 3,
        width: '10svw',
        height: '10svw',
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        transition: 'all 0.2s ease-in-out',
        ...(isSelected
          ? {
              border: `1px solid ${primary.main}`,
              boxShadow: `0px 0px 10px ${primary.main}90`,
            }
          : {
              ':hover': {
                border: `1px solid ${primary.main}`,
                scale: 1.01,
                boxShadow: `0px 0px 10px ${primary.main}50`,
              },
            }),
        ...props.sx,
      }}
      {...props}
    >
      <Typography variant="body1">{condominium.name}</Typography>
      <Stack
        sx={{
          width: '50%',
          height: '50%',
          display: 'flex',
          marginTop: '20%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={condominium.image} alt={condominium.title} width={'100%'} />
      </Stack>
    </Card>
  )
}
