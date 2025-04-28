import { Card, Stack, Typography, useTheme } from '@mui/material'
import { ICondominium } from '../../data/interfaces/condominium'

export const CondominiumItem = ({
  condominium,
}: {
  condominium: ICondominium
}) => {
  const {
    palette: { primary },
  } = useTheme()

  return (
    <Card
      key={condominium.id}
      sx={{
        width: '10svw',
        height: '10svw',
        padding: 3,
        margin: 1,
        border: `1px solid ${primary.main}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        ':hover': {
          backgroundColor: `${primary.main}50`,
          scale: 1.05,
          boxShadow: `0px 0px 10px ${primary.main}50`,
          transition: 'all 0.2s ease-in-out',
        },
      }}
    >
      <Typography variant="body1">{condominium.name}</Typography>
      <Stack
        sx={{
          width: '30%',
          height: '30%',
        }}
      >
        <img src={condominium.image} alt={condominium.title} width={'100%'} />
      </Stack>
    </Card>
  )
}
