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
    palette: { primary, background },
  } = useTheme()

  return (
    <Card
      onClick={(e) => {
        onPress?.(condominium)
        props?.onClick?.(e)
      }}
      key={condominium.id}
      sx={{
        margin: 3,
        p: 0.5,
        width: '10svw',
        height: '10svw',
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        flexDirection: 'column',
        transition: 'all 0.2s ease-in-out',
        ...(!isSelected
          ? {
              border: `2px solid ${background.paper}`,
              boxShadow: `0px 0px 10px ${primary.main}90`,
              bgcolor: `${primary.main}50`,
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
      <Typography
        variant="body1"
        fontWeight="bold"
        color={!isSelected ? 'background.paper' : primary.main}
        textAlign="center"
      >
        {condominium.name}
      </Typography>
      <Stack
        sx={{
          width: '80%',
          height: '60%',
          display: 'flex',
          marginTop: 1,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={condominium.image}
          alt={condominium.name}
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            maxHeight: '100%',
            borderRadius: '4px',
          }}
        />
      </Stack>
    </Card>
  )
}
